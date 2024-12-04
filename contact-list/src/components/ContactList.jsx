import { useState, useEffect } from "react";
import ContactRow from "./ContactRow";

const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];

const ContactList = ({ setContactID }) => {
  const [contacts, setContacts] = useState(dummyContacts);
  //   console.log("Contacts: ", contacts);

  useEffect(() => {
    async function getContacts() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const data = await response.json();
        // console.log(data);
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    }
    getContacts();
  }, []);

  return (
    <>
      <h1>Contact List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <ContactRow
              key={index}
              contact={contact}
              setContactID={setContactID}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactList;
