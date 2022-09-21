import React, { useState } from "react";

function App() {
  const [contact, newContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });
  console.log(contact);

  function handleInput(event) {
    const { name, value } = event.target;
    newContact((prevContact) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevContact.lName,
          email: prevContact.email
        };
      } else if (name === "lName") {
        return {
          fName: prevContact.fName,
          lName: value,
          email: prevContact.email
        };
      } else if (name === "email") {
        return {
          fName: prevContact.fName,
          lName: prevContact.lName,
          email: value
        };
      }
    });
  }
  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input onChange={handleInput} name="lName" placeholder="Last Name" />
        <input onChange={handleInput} name="fName" placeholder="First Name" />
        <input onChange={handleInput} name="email" placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
