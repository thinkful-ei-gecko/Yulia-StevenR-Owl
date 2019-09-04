import React from 'react';

function ParticipantList({participants}) {
    return (
        <section>
        {participants.map(person =><div><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img>
    {!person.inSession&&!person.onStage? <span>left</span>: person.onStage ? <span>on stage</span>: <span>in session</span>}</div>)}
        
        </section>
    )
}


export default ParticipantList;

 