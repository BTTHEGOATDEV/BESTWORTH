import { type Contact, type InsertContact, type Consultation, type InsertConsultation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Contact methods
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  
  // Consultation methods
  createConsultation(consultation: InsertConsultation): Promise<Consultation>;
  getConsultationById(id: string): Promise<Consultation | undefined>;
  updateConsultationStatus(id: string, status: string): Promise<Consultation | undefined>;
}

export class MemStorage implements IStorage {
  private contacts: Map<string, Contact>;
  private consultations: Map<string, Consultation>;

  constructor() {
    this.contacts = new Map();
    this.consultations = new Map();
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = {
      ...insertContact,
      id,
      phone: insertContact.phone || null,
      createdAt: new Date(),
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createConsultation(insertConsultation: InsertConsultation): Promise<Consultation> {
    const id = randomUUID();
    const consultation: Consultation = {
      ...insertConsultation,
      id,
      phone: insertConsultation.phone || null,
      status: "scheduled",
      createdAt: new Date(),
    };
    this.consultations.set(id, consultation);
    return consultation;
  }

  async getConsultationById(id: string): Promise<Consultation | undefined> {
    return this.consultations.get(id);
  }

  async updateConsultationStatus(id: string, status: string): Promise<Consultation | undefined> {
    const consultation = this.consultations.get(id);
    if (!consultation) return undefined;

    const updated: Consultation = {
      ...consultation,
      status,
    };
    this.consultations.set(id, updated);
    return updated;
  }
}

export const storage = new MemStorage();
