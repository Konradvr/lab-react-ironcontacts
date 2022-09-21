import "./App.css";
import "./contacts.json"
import React, { useState } from 'react';
import contacts from "./contacts.json";
const randomContact = contacts.splice(5, contacts.length - 1)
const fiveContacts = contacts.slice(0, 5) 
function App() {
  // console.log(randomContact)
  const [contactsList, setContactsList] = useState(fiveContacts)   
  const copyExistingList = [...contactsList] // -> can use it for every update 
  const handleAdding = (event) => {
    event.preventDefault();
    // Generate a random number to get a contact from the array
    // -> RANDOMNUMBER IN THE LENGTH OF THE ARRAYINDEX
    const randomIndex = Math.floor(Math.random() * randomContact.length); 
    // console.log(randomIndex)
    const randomCeleb = randomContact.splice(randomIndex, 1)
    // -> SPLICE BETWEEN Math.random() (decleared VAR) and one object in the INDEX OF THE ARRAY 
    // console.log(randomCeleb)
    const newContactList = [...contactsList, ...randomCeleb]
    setContactsList(newContactList)
    // SORT BY NAMES (ALPHABETICAL)
  }
  let sortedByName = (event) => {
    event.preventDefault();
    // make copie of the live updated Contact List 
    // sort them Alphabetical 
    const sortedList = copyExistingList.sort((a,b) => b.name.localeCompare(a.name))
    // console.log(sortedList)

    setContactsList(sortedList)
  }
  let sortedByPopularity = (event) => {
    event.preventDefault(); 
    const sortedNumbers = copyExistingList.sort((a,b) => b.popularity - a.popularity)
    console.log(sortedNumbers)
    setContactsList(sortedNumbers)
    // STUPID 
    // for(let i = 0; i < copyExistingList.length; i++){
    //   const sortedNumber = copyExistingList[i]
    //   const numberToString = sortedNumber.popularity.toString()
    //   console.log(numberToString)
    //   const sortedNumberToString = numberToString.sort((a,b) => a.localeCompare(b))
    //   console.log(sortedNumberToString)
    // }
  }
  // let deleteCeleb = (event) => {
    //   copyExistingList(current => {
      //     current.filter(Celeb => {
        //       return Celeb.id !== Celeb.delete() 
        //     })
        //   })
        
        // }
        const handleDeleting = (event, id) => {
          event.preventDefault();
          const listCopy = [...contactsList]
          const celebToRemove = listCopy.filter(obj => obj.id === id)
          copyExistingList.push(...celebToRemove)
          const newList = listCopy.filter(obj => obj.id !== id)
          setContactsList(newList)
        }
  
  return (
    <div className="App">
      <div className="top-buttonA">
        <button onClick={handleAdding} className="top-button">Random</button>
        <button onClick={sortedByName} className="top-button">Sorted</button>
        <button onClick={sortedByPopularity} className="top-button">Sorted</button>
      </div>
           <table className="table-1">
              <tr>
                <th className="table-1-th">Picture</th>
                <th className="table-1-th">Name</th>
                <th className="table-1-th">Popularity</th>
                <th className="table-1-th">Won <br></br> Osacar</th>
                <th className="table-1-th">Won <br></br> Emmy</th>
                <th className="table-1-th">Actions</th>
              </tr>
          {contactsList.map(five => {
            /* FOR LOOP 
            for(let i = 0; i < contacsList.length; i++){
              const wonOscarString = contacsList[i].wonOscar.toString() 
              // const wonEmmyString = contacsList[i].wonEmmy.toString()
              if (wonOscarString == "true"){
                // console.log("1")
                // boolean if(wonOscarString)
                return five.wonOscar = "🏆" 
              }
            }
            */
           return (
             <tr> 
                <td className="table-1-td"> <img src={five.pictureUrl} width="60%" /></td>
                <td className="table-1-td">{five.name}</td>
                <td className="table-1-td">{five.popularity.toFixed(2)}</td>
                <td className="table-1-td">{five.wonOscar ? '🏆': ''}</td>
                <td className="table-1-td">{five.wonEmmy  ? '🏆': ''}</td>
                {/* <td className="table-1-td">{five.wonOscar ? '🏆': ''}</td> */}
                {/* <td className="table-1-td">{five.wonEmmy  ? '🏆': ''}</td>
              NO NEED TO TO .toString() -> when BOOLEAN */}
              
                <td className="table-1-td"> 
                <td><button onClick={(event) => handleDeleting(event, five.id)}>Delete contact</button></td>
                </td>
              </tr>
           )
          })}
          </table>
      </div>
      )
    }; 
    export default App;
    