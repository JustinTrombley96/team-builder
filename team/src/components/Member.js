import React from 'react'
import Form from './Form'

const Member = props => {

    function editingMember() {
        props.setEditMember(props.member)
    }
    console.log(props.editMember)
    return (
        <div>
            {props.editMember.id === props.member.id ? 
            <Form 
                newMember={props.editMember} 
                handleChange={props.handleEditChange}
                handleSubmit={props.handleEditSubmit}/> : (
            <>
            <h2>Name: {props.member.name}</h2>
            <h4>Email: {props.member.email}</h4>
            <h4>Role: {props.member.role}</h4>
            <button onClick={editingMember}>Edit</button>
            </>
            )}
            
        </div>

    )
}
export default Member