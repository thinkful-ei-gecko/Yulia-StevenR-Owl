import React from 'react';
import ParticipantList from './partList';
import Stage from './stage';
import './App.css'

export default function App({participants}) {
    return (
        <main className="App">
            <ParticipantList className="list">{participants}</ParticipantList>
            <Stage className="stage">{participants}</Stage>
        </main>
    )
};