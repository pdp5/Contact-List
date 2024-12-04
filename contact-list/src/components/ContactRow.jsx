const ContactRow = ({ contact, setContactID }) => {
  return (
    <tr
      className="each-contact-detail"
      onClick={() => setContactID(contact.id)}
    >
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  );
};

export default ContactRow;
