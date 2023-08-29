import { useState } from "react";

export default function Person() {
    const [person, setPerson] = useState({ firstName: 'John', lastName: "Doe", age: 100 });
 
    // GOOD - Do this!
    const handleIncreaseAge = () =>{
       // copy the existing person object into a new object 
       // while updating the age property
       const newPerson = { ...person, age: person.age + 1 };
       setPerson(newPerson);
    }

    const handleFirstNameChange = (e) => {
        const newPerson = {...person, firstName: e.target.value}
        setPerson(newPerson)
    }

    const handleLastNameChange = (e) => {
        const newPerson = {...person, lastName: e.target.value}
        setPerson(newPerson)
    }
    
    return (
       <>
          <h1>{person.firstName + " " + person.lastName}</h1>
          <h2>{person.age}</h2>
          <button onClick={handleIncreaseAge}>Increase age</button>
          <input value={person.firstName} onChange={handleFirstNameChange}/>
          <input value={person.lastName} onChange={handleLastNameChange}/>
          
       </>
    )
 }