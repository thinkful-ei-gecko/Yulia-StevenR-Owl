import React from 'react';
export default function Chat(props) {
    return (
        <ul className={props.className}>
            {props.chatEvents.map((event, i) =>
            <li key={i}><span>{new Date(event.timestamp).toLocaleDateString()}</span>
            <p>{event.message}</p><p>{event.type}</p></li>
            )}
        </ul>
    )
}
