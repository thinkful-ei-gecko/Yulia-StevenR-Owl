import React from 'react';
import ParticipantList from './partList';
import Stage from './stage';
import Chat from './Chat';
import './App.css'

export default function App(props) {
    return (
        <main className="App">
            <ParticipantList className="list" participants={props.participants}></ParticipantList>
            <Chat className="list" chatEvents={props.chatEvents}></Chat>
            <Stage className="stage" participants={props.participants}></Stage>
        </main>
    )
};