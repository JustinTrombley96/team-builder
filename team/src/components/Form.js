import React from 'react'

function Form(props) {

    return (
        <div>
            <form onSubmit={event => props.handleSubmit(event)}>
                <label>
                    Name:
                    <input type="text" name="name" 
                        value={props.newMember.name} 
                        onChange={event => props.handleChange(event)} required  />
                </label>
                <label>
                    Email:
                    <input type="text" name="email" 
                        value={props.newMember.email} 
                        onChange={event => props.handleChange(event)} required />

                </label>
                <label>
                    Role:
                    <input type="radio" 
                        value="Full-Stack" 
                        name="role" 
                        onChange={event => props.handleChange(event)} 
                        checked= {props.newMember.role === "Full-Stack"} required />
                    <label>Full-Stack</label>
                    <input type="radio" 
                        value= "Front-End" 
                        name="role" 
                        onChange={event => props.handleChange(event)} 
                        checked= {props.newMember.role === "Front-End"} />
                    <label>Front-End</label>
                    <input type="radio" 
                        value="Back-End" 
                        name="role" 
                        onChange={event => props.handleChange(event)} 
                        checked= {props.newMember.role === "Back-End"} />
                    <label>Back-End</label>
                    
                </label>
                <button>Submit</button>
            </form>          
        </div>
    )
}
export default Form