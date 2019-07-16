import React from 'react'
import Member from './Member';

const CurrentTeam = props => {
    return (
        <div>
            {props.currentTeam.map(member => <Member member={member} memberToEdit={props.memberToEdit} setEditing={props.setEditing} setEditMember={props.setEditMember} />)}
        </div>
    )
}
export default CurrentTeam