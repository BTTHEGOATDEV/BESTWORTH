import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertConsultationSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const contact = await storage.createContact(validatedData);
      
      // Log contact form submission for now
      console.log("New contact form submission:", contact);
      
      res.json({ success: true, id: contact.id });
    } catch (error: any) {
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
      
      // Log consultation booking for now
      console.log("New consultation booking:", consultation);
      
      res.json({ 
        success: true, 
        consultation: consultation,
        message: "Consultation scheduled successfully! We will contact you within 24 hours to confirm the appointment." 
      });
    } catch (error: any) {
      res.status(400).json({ 
        message: "Error creating consultation: " + error.message 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
