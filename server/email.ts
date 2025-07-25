import sgMail from '@sendgrid/mail';

// Initialize SendGrid only if API key is available
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

interface ContactEmailData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

interface ConsultationEmailData {
  name: string;
  email: string;
  phone?: string;
  consultationType: string;
  amount: string;
}

export async function sendContactNotification(contactData: ContactEmailData): Promise<boolean> {
  // If no SendGrid API key, just log and continue
  if (!process.env.SENDGRID_API_KEY) {
    console.log('📧 Contact form submission received (SendGrid not configured):', {
      from: contactData.email,
      subject: contactData.subject,
      name: contactData.name
    });
    return true;
  }

  try {
    const msg = {
      to: 'sarah@bestworthlaw.com', // Law firm's email
      from: 'noreply@bestworthlaw.com', // Must be verified domain in SendGrid
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${contactData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            ${contactData.phone ? `<p><strong>Phone:</strong> <a href="tel:${contactData.phone}">${contactData.phone}</a></p>` : ''}
            <p><strong>Subject:</strong> ${contactData.subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border-left: 4px solid #f39c12; margin: 20px 0;">
            <h3 style="color: #2c3e50; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${contactData.message}</p>
          </div>
          
          <div style="background-color: #2c3e50; color: white; padding: 15px; text-align: center; margin-top: 30px; border-radius: 8px;">
            <p style="margin: 0;">
              <strong>BestWorth Law Firm</strong><br>
              Professional Legal Services
            </p>
          </div>
        </div>
      `,
    };

    await sgMail.send(msg);
    console.log('✅ Contact notification email sent successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to send contact notification email:', error);
    return false;
  }
}

export async function sendConsultationNotification(consultationData: ConsultationEmailData): Promise<boolean> {
  // If no SendGrid API key, just log and continue
  if (!process.env.SENDGRID_API_KEY) {
    console.log('📧 Consultation booking received (SendGrid not configured):', {
      from: consultationData.email,
      type: consultationData.consultationType,
      name: consultationData.name
    });
    return true;
  }

  try {
    // Email to law firm
    const firmNotification = {
      to: 'sarah@bestworthlaw.com',
      from: 'noreply@bestworthlaw.com',
      subject: `New Consultation Booking: ${consultationData.consultationType} - ${consultationData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            New Consultation Booking
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Client Information</h3>
            <p><strong>Name:</strong> ${consultationData.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${consultationData.email}">${consultationData.email}</a></p>
            ${consultationData.phone ? `<p><strong>Phone:</strong> <a href="tel:${consultationData.phone}">${consultationData.phone}</a></p>` : ''}
          </div>
          
          <div style="background-color: #e8f5e8; padding: 20px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #28a745;">
            <h3 style="color: #2c3e50; margin-top: 0;">Consultation Details</h3>
            <p><strong>Type:</strong> ${consultationData.consultationType === 'initial' ? 'Initial Consultation (60 min)' : 'Extended Consultation (90 min)'}</p>
            <p><strong>Amount:</strong> $${consultationData.amount}</p>
            <p><strong>Status:</strong> Scheduled (Awaiting confirmation)</p>
          </div>
          
          <div style="background-color: #fff3cd; padding: 15px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #ffc107;">
            <p style="margin: 0;"><strong>Next Step:</strong> Contact the client within 24 hours to schedule the appointment.</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to client
    const clientConfirmation = {
      to: consultationData.email,
      from: 'noreply@bestworthlaw.com',
      subject: 'Consultation Booking Confirmation - BestWorth Law Firm',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 3px solid #f39c12; padding-bottom: 10px;">
            Consultation Booking Confirmed
          </h2>
          
          <p>Dear ${consultationData.name},</p>
          
          <p>Thank you for booking a consultation with BestWorth Law Firm. We have received your request and will contact you within 24 hours to schedule your appointment.</p>
          
          <div style="background-color: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-top: 0;">Your Consultation Details</h3>
            <p><strong>Type:</strong> ${consultationData.consultationType === 'initial' ? 'Initial Consultation (60 minutes)' : 'Extended Consultation (90 minutes)'}</p>
            <p><strong>Amount:</strong> $${consultationData.amount}</p>
            <p><strong>Status:</strong> Scheduled</p>
          </div>
          
          <div style="background-color: #e8f5e8; padding: 15px; margin: 20px 0; border-radius: 8px;">
            <h3 style="color: #2c3e50; margin-top: 0;">What's Next?</h3>
            <ul style="margin: 0; padding-left: 20px;">
              <li>We'll contact you within 24 hours to confirm your preferred appointment time</li>
              <li>Please have any relevant documents ready for review</li>
              <li>Prepare a list of questions or concerns you'd like to discuss</li>
            </ul>
          </div>
          
          <div style="background-color: #2c3e50; color: white; padding: 20px; text-align: center; margin-top: 30px; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #f39c12;">BestWorth Law Firm</h3>
            <p style="margin: 5px 0;">Sarah BestWorth, Esq.</p>
            <p style="margin: 5px 0;">📞 (555) 123-4567</p>
            <p style="margin: 5px 0;">✉️ sarah@bestworthlaw.com</p>
            <p style="margin: 5px 0;">📍 123 Legal Plaza, Suite 456</p>
          </div>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      sgMail.send(firmNotification),
      sgMail.send(clientConfirmation)
    ]);

    console.log('✅ Consultation notification emails sent successfully');
    return true;
  } catch (error) {
    console.error('❌ Failed to send consultation notification emails:', error);
    return false;
  }
}