import React from 'react'

const Member = props => {
    return (
        <div>
            <h2>Name: {props.member.name}</h2>
            <h4>Email: {props.member.email}</h4>
            <h4>Role: {props.member.role}</h4>
            <button onClick={event => props.memberToEdit(event)}>Edit</button>
        </div>
    )
}
export default Member