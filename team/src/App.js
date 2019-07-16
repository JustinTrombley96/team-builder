import React, { useState} from 'react';
import './App.css';
import Form from './components/Form'
import CurrentTeam from './components/CurrentTeam'



const App = () => {

  //Editing
  const [editing, setEditing] = useState(false)
  const [editMember, setEditMember] = useState( {name: "", email: "", role: "", id:""  })
  //Form Hook
  const [newMember, setNewMember] = useState(  {name: "", email: "", role: "", id: "" }
  )
  //Rendering Team Hook
  const [currentTeam, setCurrentTeam] = useState(
    [
  {
    name: "Justin",
    email: 'jjjk@gmail.com',
    role: "Full-Stack",
    id: 1
  },
  {
    name: "Jose",
    email: 'jjjdfsk@gmail.com',
    role: "Full-Stack",
    id: 2
  },

])

  const handleChange = event => {
    setNewMember ({ ...newMember, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    let addMember = {...newMember, id: currentTeam.length + 1}
    setCurrentTeam([...currentTeam, addMember])
    setNewMember({name: '', email: '', role:'', id: ''})
    console.log(newMember.name)
    console.log(newMember.email)
    console.log(newMember.role)
    console.log(newMember.id)
    console.log("New Member", newMember)


  }
  const handleEditChange = event => {
    setEditMember ({ ...editMember, [event.target.name]: event.target.value})
  }

  const handleEditSubmit = event => {
    event.preventDefault();
    let filteredArray = currentTeam.map(member => member.id !== editMember.id ? member : editMember)
    // let addMember = {...editMember, id: currentTeam.length + 1}
    setCurrentTeam(filteredArray)
    setEditMember({name: '', email: '', role:'', id: ''})
    console.log(newMember.name)
    console.log(newMember.email)
    console.log(newMember.role)
    console.log(newMember.id)
    console.log("New Member", newMember)


  }



  const memberToEdit = () => {
    setNewMember({ name: newMember.name, email: newMember.email, role: newMember.role, id: newMember.id})

  }

  return (
    <div className="App">
      <Form 
        handleChange={handleChange} 
        handleSubmit={handleSubmit} 
        newMember={newMember} 
        setNewMember={setNewMember} 
        editing={editing} 
        editMember={editMember} />
      <CurrentTeam 
        handleSubmit={handleSubmit} 
        handleChange={handleChange} 
        newMember={newMember} 
        currentTeam={currentTeam} 
        memberToEdit={memberToEdit} 
        setEditing={setEditing} 
        setEditMember={setEditMember} 
        editMember={editMember} 
        handleEditChange={handleEditChange}
        handleEditSubmit={handleEditSubmit} />
    </div>
  );
}

export default App;
