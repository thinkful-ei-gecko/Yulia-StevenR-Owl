import React from 'react';
import './partList.css';

// function ParticipantList({participants}) {
//     return (
//         <section>
//         {participants.map(person =><div><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img>
//     {!person.inSession&&!person.onStage? <span>left</span>: person.onStage ? <span>on stage</span>: <span>in session</span>}</div>)}
        
//         </section>
//     )
// }

function ParticipantList(props) {
    return (
        <ul className={props.className}>
        {props.children.map((person, i) =><li key={i}><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img>
    {!person.inSession&&!person.onStage? <span>left</span>: person.onStage ? <span>on stage</span>: <span>in session</span>}</li>)}
        </ul>
    )
}


export default ParticipantList;

 