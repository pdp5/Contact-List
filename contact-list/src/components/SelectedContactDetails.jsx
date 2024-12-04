import { useState, useEffect } from "react";
import BackButton from "./BackButton";

const SelectedContactDetails = ({ contactID, setContactID }) => {
  const [selectedContactData, setSelectedContactData] = useState([]);

  useEffect(() => {
    async function getSelectedContactData() {
      try {
        const response = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users" +
            `/${contactID}`
        );
        const data = await response.json();
        console.log("Selected user: ", data);
        setSelectedContactData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getSelectedContactData();
  }, [contactID]);

  if (!selectedContactData.name) {
    return <p>Loading contact details...</p>;
  }

  return (
    <>
      <div className="selected-contact-detail">
        <h1>Contact Info:</h1>
        <p>
          <strong>Name: </strong> {selectedContactData.name}
        </p>
        <p>
          <strong>Email: </strong> {selectedContactData.email}
        </p>
        <p>
          <strong>Username: </strong> {selectedContactData.username}
        </p>
        <p>
          <strong>Address: </strong>
        </p>
        <p>
          <strong>Street: </strong> {selectedContactData.address.street}
        </p>
        <p>
          <strong>Suite: </strong> {selectedContactData.address.suite}
        </p>
        <p>
          <strong>City: </strong>
          {selectedContactData.address.city}
        </p>
        <p>
          <strong>Zipcode: </strong> {selectedContactData.address.zipcode}
        </p>
        <p>
          <strong>Phone No.: </strong> {selectedContactData.phone}
        </p>
        <p>
          <strong>Website: </strong> {selectedContactData.website}
        </p>
        <p>
          <strong>Company Name:</strong> {selectedContactData.company.name}
        </p>
        <BackButton setContactID={setContactID} />
      </div>
    </>
  );
};

export default SelectedContactDetails;
