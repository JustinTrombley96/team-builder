import React, { useState} from 'react';
import './App.css';
import Form from './components/Form'
import CurrentTeam from './components/CurrentTeam'



const App = () => {

  //Editing
  const [editing, setEditing] = useState(false)
  const [editMember, setEditMember] = useState()
  //Form Hook
  const [newMember, setNewMember] = useState(  {id: "", name: "", email: "", role: ""  }
  )
  //Rendering Team Hook
  const [currentTeam, setCurrentTeam] = useState(
    [
  {
    id: 1,
    name: "Justin",
    email: 'jjjk@gmail.com',
    role: "Full-Stack"   
  },
  {
    id: 2,
    name: "Jose",
    email: 'jjjdfsk@gmail.com',
    role: "Full-Stack"
  },

])


  const handleChange = event => {
    setNewMember ({ ...newMember, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    setCurrentTeam([...currentTeam, newMember])
    setNewMember({name: '', email: ''})
    console.log(newMember.name)
    console.log(newMember.email)
    console.log(newMember.role)
    console.log("New Member", newMember)


  }

  const memberToEdit = () => {
    setEditing(true)

    setNewMember({ name: newMember.name, email: newMember.email, role: newMember.role})

  }

  return (
    <div className="App">
      <Form handleChange={handleChange} handleSubmit={handleSubmit} newMember={newMember} setNewMember={setNewMember} editing={editing} editMember={editMember} />
      <CurrentTeam currentTeam={currentTeam} memberToEdit={memberToEdit} setEditing={setEditing} setEditMember={setEditMember}  />
    </div>
  );
}

export default App;
