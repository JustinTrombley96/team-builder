import React, { useState} from 'react';
import './App.css';
import Form from './components/Form'
import CurrentTeam from './components/CurrentTeam'



const App = () => {
  //Form Hook
  const [user, setUser] = useState(  {name: "", email: "", role: ""  }
  )
  //Rendering Team Hook
  const [currentTeam, setCurrentTeam] = useState(
    [
  {
    name: "Justin",
    email: 'jjjk@gmail.com',
    role: "Full-Stack"   
  },
  {
    name: "Jose",
    email: 'jjjdfsk@gmail.com',
    role: "Full-Stack"   
  },

])

  const handleChange = event => {
    setUser ({ ...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = event => {
    event.preventDefault();
    setCurrentTeam([...currentTeam, user])
    setUser({name: '', email: ''})
    console.log(user.name)
    console.log(user.email)
    console.log(user.role)
    console.log("User", user)


  }

  const memberToEdit = event => {


  }

  return (
    <div className="App">
      <Form handleChange={handleChange} handleSubmit={handleSubmit} user={user} setUser={setUser} />
      <CurrentTeam currentTeam={currentTeam} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
