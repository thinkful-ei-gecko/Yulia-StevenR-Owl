import React from 'react';
import './stage.css';

export default function Stage(props) {
return (
    <section className={props.className}>{props.participants.map((person, i) => 
    person.onStage ? <span key={i}><h1>{person.name}</h1><img src={person.avatar} alt='participantsAvatar'></img></span> : <span key={i}>{null}</span>)
    }
    </section>)
}