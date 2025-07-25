import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const contactMutation = useMutation({
    mutationFn: (data: any) => apiRequest("POST", "/api/contact", data),
    onSuccess: () => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your message! We will get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        privacy: false,
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error Sending Message",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacy) {
      toast({
        title: "Privacy Policy Agreement Required",
        description: "Please agree to the privacy policy to proceed.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
    });
  };

  const updateFormData = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Get in <span className="text-gold">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a confidential consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold rounded-full p-3">
                  <MapPin className="text-navy w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy mb-2">Office Location</h3>
                  <p className="text-gray-700">
                    123 Legal Plaza, Suite 456<br />
                    Downtown Business District<br />
                    City, State 12345
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold rounded-full p-3">
                  <Phone className="text-navy w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy mb-2">Phone</h3>
                  <p className="text-gray-700">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold rounded-full p-3">
                  <Mail className="text-navy w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy mb-2">Email</h3>
                  <p className="text-gray-700">sarah@bestworthlaw.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-gold rounded-full p-3">
                  <Clock className="text-navy w-6 h-6" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-navy mb-2">Office Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 8:00 AM - 6:00 PM<br />
                    Saturday: 9:00 AM - 2:00 PM<br />
                    Sunday: By Appointment
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern law office interior with consultation area" 
                className="rounded-xl shadow-lg w-full" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-navy mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => updateFormData("name", e.target.value)}
                    className="focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateFormData("email", e.target.value)}
                    className="focus:ring-gold focus:border-transparent"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateFormData("phone", e.target.value)}
                    className="focus:ring-gold focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                  <Select required value={formData.subject} onValueChange={(value) => updateFormData("subject", value)}>
                    <SelectTrigger className="focus:ring-gold focus:border-transparent">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="corporate">Corporate Law</SelectItem>
                      <SelectItem value="litigation">Litigation</SelectItem>
                      <SelectItem value="contracts">Contract Law</SelectItem>
                      <SelectItem value="real-estate">Real Estate Law</SelectItem>
                      <SelectItem value="employment">Employment Law</SelectItem>
                      <SelectItem value="estate-planning">Estate Planning</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                <Textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => updateFormData("message", e.target.value)}
                  placeholder="Please describe your legal matter or questions..."
                  className="focus:ring-gold focus:border-transparent resize-vertical"
                />
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  required
                  checked={formData.privacy}
                  onChange={(e) => updateFormData("privacy", e.target.checked)}
                  className="mt-1 h-4 w-4 text-gold focus:ring-gold border-gray-300 rounded"
                />
                <label className="ml-2 text-sm text-gray-700">
                  I agree to the Privacy Policy and consent to being contacted regarding my inquiry. *
                </label>
              </div>
              
              <Button
                type="submit"
                disabled={contactMutation.isPending}
                className="w-full bg-gold hover:bg-deep-gold text-navy px-6 py-4 text-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
                <span className="ml-2">✈</span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
