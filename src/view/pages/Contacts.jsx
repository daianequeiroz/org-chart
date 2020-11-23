import React, { useState, useEffect } from 'react';
import ContactForm from '../../components/ContactForm.jsx';
import ContactService from '../../service/ContactService.js';

export default function Contacts() {
  const initialContact = {
    id: '',
    name: '',
    phone: '',
    email: '',
    address: ''
  };

  let [currentContact, setCurrentContact] = useState(initialContact);
  let [contactObjects, setContactObjects] = useState([]);
  let contactServices = new ContactService();

  async function fetchData() {
    let contacts = await contactServices.listContacts();
    setContactObjects(contacts);
  }

  //Once components load complete
  useEffect(() => {
    fetchData();
  }, []);

  const addOrEdit = obj => {
    contactServices.addContact(obj);
    setCurrentContact(prevState => {
      return { ...prevState, ...initialContact };
    });
    fetchData();
  };

  const onDelete = id => {
    contactServices.deleteContact(id);
    setCurrentContact(prevState => {
      return { ...prevState, ...initialContact };
    });
    fetchData();
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contacts Management</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ currentContact: currentContact, addOrEdit }}></ContactForm>
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contactObjects.map(contact => (
                <tr key={contact.id}>
                  <td>{contact.name}</td>
                  <td>{contact.phone}</td>
                  <td>{contact.email}</td>
                  <td className="bg-light">
                    <button
                      className="btn text-primary"
                      onClick={() => {
                        setCurrentContact(prevState => {
                          return { ...prevState, ...contact };
                        });
                      }}
                    >
                      <i className="fas fa-pencil-alt"></i>
                    </button>
                    <button
                      className="btn text-danger"
                      onClick={() => {
                        onDelete(contact.id);
                      }}
                    >
                      <i className="far fa-trash-alt"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
