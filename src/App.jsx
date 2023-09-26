import { useState } from "react";
import "./App.css";
import contactsJson from "./contacts.json"

function App() {
  const [copyContacts, setcopyContacts] = useState (contactsJson)
  const [contacts, setContacts] = useState (contactsJson.slice(0,5))
  const handleClick = () => {
    const randomContact =
    copyContacts[Math.floor(Math.random() * copyContacts.length)];
    // Ensure the contact is not already in the list before adding it
    if (!contacts.some((contact) => contact.id === randomContact.id)) {
      setContacts([...contacts, randomContact]);
    }
  };
  const sortName = () => {
    const sortedContactsName = [...contacts]
    sortedContactsName.sort((a,b)=>{
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedContactsName);
  }
  const sortPopularity = () => {
    const sortedContacts = [...contacts]
    sortedContacts.sort((a,b)=>b.popularity-a.popularity);
    setContacts(sortedContacts);
  }
/*   const actionDelete = () => {
    const deleteContacts = [...contacts]
    let newVar = ""
    console.log(oneContact.id);
    setContacts(deleteContacts);
  } */


  function actionDelete(id) {
    const deleteContacts = contacts.filter((contact)=>contact.id !== id);
    setContacts(deleteContacts)
  }
{/* <td>{<button onClick={() => delet(id)}>Delet</button>}</td> */}


  return (
    <div className="App">
      <h1>LAB | React IronContacts</h1>
      <button onClick={handleClick}>Add Random Contacts</button>
      <button onClick={sortName}>Sort By Name</button>
      <button onClick={sortPopularity}>Sort By Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>wonOscar</th>
            <th>wonEmmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((oneContact)=> {
            return (
              <tr key={oneContact.id}>
                <td>
                  <img src={oneContact.pictureUrl}
                  style={{ height: "100px" }} />
                </td>
                <td>{oneContact.name}</td>
                <td>{oneContact.popularity}</td>
                <td>{oneContact.wonOscar ? "🏆" : ""}</td>
                <td>{oneContact.wonEmmy ? "🏆" : ""}</td>
                <td>{<button onClick={() => actionDelete(oneContact.id)}>Delete</button>}</td>
              </tr>
            )
          })}
 
        </tbody>
      </table>
    </div>
  );
}

export default App;
