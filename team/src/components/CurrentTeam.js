import React from 'react'
import User from './Member'
import Member from './Member';

const CurrentTeam = props => {
    return (
        <div>
            {props.currentTeam.map(member => <Member member={member} memberToEdit={props.memberToEdit} />)}
        </div>
    )
}
export default CurrentTeam