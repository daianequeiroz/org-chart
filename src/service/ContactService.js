import { firestoreDB } from '../config/firebase.js';

export default class ContactService {
  constructor() {
    this.contactsCollection = firestoreDB.collection('contacts');
  }

  async addContact(contact) {
    try {
      if (contact.id === '') {
        await this.contactsCollection.add(this.removeContactId(contact));
      } else {
        await this.contactsCollection.doc(contact.id).update(this.removeContactId(contact));
      }
    } catch (error) {
      console.error(`Error trying to save contact: ${error}`);
    }
  }

  async listContacts() {
    try {
      const contactsCollection = await this.contactsCollection.get();
      const contacts = contactsCollection.docs.map(contact => {
        return { id: contact.id, ...contact.data() };
      });

      return contacts;
    } catch (error) {
      console.error(`Error trying to get contacts list: ${error}`);
    }
  }

  async getContact(contactId) {
    try {
      let contact = await this.contactsCollection.doc(contactId).get();
      return { id: contact.id, ...contact.data() };
    } catch (error) {
      console.error(`Error trying to get contact with id ${contactId}: ${error}`);
    }
  }

  async deleteContact(contactId) {
    try {
      await this.contactsCollection.doc(contactId).delete();
    } catch (error) {
      console.error(`Error trying to delete contact with id ${contactId}: ${error}`);
    }
  }

  removeContactId(contact) {
    return {
      name: contact.name,
      phone: contact.phone,
      email: contact.email,
      address: contact.address
    };
  }
}
