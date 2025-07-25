import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertConsultationSchema } from "@shared/schema";
import { sendContactNotification, sendConsultationNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Send email notification
      await sendContactNotification({
        name: contact.name,
        email: contact.email,
        phone: contact.phone || undefined,
        subject: contact.subject,
        message: contact.message
      });
      
      console.log("✅ Contact form processed and notification sent:", contact.id);
      
      res.json({ success: true, id: contact.id });
    } catch (error: any) {
      console.error("❌ Error processing contact form:", error);
      res.status(400).json({ 
        message: "Error processing contact form: " + error.message 
      });
    }
  });

  // Create consultation booking (simplified without payment processing)
  app.post("/api/consultation", async (req, res) => {
    try {
      const validatedData = insertConsultationSchema.parse(req.body);
      const consultation = await storage.createConsultation(validatedData);
      
      // Send email notifications
      await sendConsultationNotification({
        name: consultation.name,
        email: consultation.email,
        phone: consultation.phone || undefined,
        consultationType: consultation.consultationType,
        amount: consultation.amount
      });
      
      console.log("✅ Consultation booked and notifications sent:", consultation.id);
      
      res.json({ 
        success: true, 
        consultation: consultation,
        message: "Consultation scheduled successfully! We will contact you within 24 hours to confirm the appointment." 
      });
    } catch (error: any) {
      console.error("❌ Error creating consultation:", error);
      res.status(400).json({ 
        message: "Error creating consultation: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
