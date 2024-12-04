import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContactDetails from "./components/SelectedContactDetails";
import "./App.css";

function App() {
  const [contactID, setContactID] = useState(null);

  return (
    <>
      {contactID ? (
        <div>
          <SelectedContactDetails
            contactID={contactID}
            setContactID={setContactID}
          />
        </div>
      ) : (
        <ContactList setContactID={setContactID} />
      )}
    </>
  );
}

export default App;
