import React from 'react';

export default function Stage({participants}) {
return (
    <section>{participants.map(person => 
    person.onStage ? <span><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img></span> : <span>{null}</span>)
    }
    </section>)
}