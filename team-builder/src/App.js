import React, {useState} from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Form from './Form'
import Card from './Card'
import styled from 'styled-components';



const Container = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
  `
const Title = styled.div`
  background-color: grey;
  font-size: 5rem;
  text-align: center;
  `

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
      
 <Title>Goat Team 🐐</Title>
 <h3>Join below👽</h3>
 <Form
    onInputChange ={onInputChange}
    onFormSubmit = {onFormSubmit}
    formValues = {formValues}
    />
    <Container>
 {
   team.map(fr => <Card fname={fr.fname} lname={fr.lname} email={fr.email} role={fr.role}/>)
 }
 </Container>
 
    </div>
    
  )
}

export default App
