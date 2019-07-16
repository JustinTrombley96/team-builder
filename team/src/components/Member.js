import React from 'react'

const Member = props => {

    function editMember() {
        props.setIsEditing(true)
        props.setEditMember(props.member)
    }

    return (
        <div>
            <h2>Name: {props.member.name}</h2>
            <h4>Email: {props.member.email}</h4>
            <h4>Role: {props.member.role}</h4>
            <button onClick={editMember}>Edit</button>
        </div>
    )
}
export default Member