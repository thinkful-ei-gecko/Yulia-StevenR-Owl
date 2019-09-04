import React from 'react';
import ParticipantList from './partList';
import Stage from './stage';

export default function App({participants}) {
    return (
        <main>
            <ParticipantList participants={participants} />
            <Stage participants={participants}/>
        </main>
    )
};