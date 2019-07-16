import React from 'react'
import Member from './Member';

const CurrentTeam = props => {
    return (
        <div>
            {props.currentTeam.map(member => <Member  handleSubmit={props.handleSubmit} handleChange={props.handleChange} newMember={props.newMember} member={member} memberToEdit={props.memberToEdit} setEditing={props.setEditing} setEditMember={props.setEditMember} editMember=
            {props.editMember}   handleEditChange={props.handleEditChange}
            handleEditSubmit={props.handleEditSubmit}/>)}
        </div>
    )
}
export default CurrentTeam