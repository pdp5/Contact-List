const BackButton = ({ setContactID }) => {
  return <button onClick={() => setContactID(null)}>Back</button>;
};

export default BackButton;
