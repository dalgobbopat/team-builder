import React, {useState} from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';

const myTeam = [
  { id: uuid(), fname: 'Patrick', lname: 'Dal Gobbo', email:'dalgobbojuan@gmail.com', role:'Software Engineer'},
]


function App() {
  const [team, setTeam] = useState(myTeam)
  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    email: '',
    role: '',
  })
  const onInputChange = event => {
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault()
    const newTeamMember = {
      id: uuid(),
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role,
    }
    setTeam([...team, newTeamMember])
  }
  return (
    <div className="App">
 <h1>Goat Team 🐐</h1>
 <h3>Join below👽</h3>
 <form onSubmit={onFormSubmit}>
   <label> First Name
      <input
        onChange={onInputChange}
        value={formValues.fname}
        name='fname'
        type='text'
      />
   </label>

   <label> Last Name
      <input
        onChange={onInputChange}
        value={formValues.lname}
        name='lname'
        type='text'
      />
   </label>

   <label> Email
      <input
        onChange={onInputChange}
        value={formValues.email}
        name='email'
        type='text'
      />
   </label>

   <label> Role
      <input
        onChange={onInputChange}
        value={formValues.role}
        name='role'
        type='text'
      />
   </label>

   <input type='submit' />
 </form>
 {
   team.map(fr => <div key={fr.id}> Name:{fr.fname} {fr.lname}<br/> @:{fr.email} <br/> Role:{fr.role}</div>)
 }
    </div>
  )
}

export default App
