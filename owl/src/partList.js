import React from 'react';
import './partList.css';

function ParticipantList(props) {
    
    return (
        <ul className={props.className}>
        {props.participants.map((person, i) =>(<li key={i}><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img>
    {!person.inSession&&!person.onStage? <span>left</span>: person.onStage ? <span>on stage</span>: <span>in session</span>}</li>))}
        </ul>
    )
}


export default ParticipantList;

 