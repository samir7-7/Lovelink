import React from 'react'
import Avatar from '@mui/material/Avatar'
import './chat.css'
import { Link } from 'react-router-dom';

function Chat({ name, message, profile, time }) {
    return (

        <Link to={`/chatpage/${name}`}>
            <div className='chat'>
                <Avatar className="chat_image" alt={name} src={profile} />
                <div className='chat_details'>
                    <h2 className='chat_name'>{name}</h2>
                    <p className='chat_message'>{message}</p>
                </div>
                <p className='chat_time'>{time}</p>
            </div>
        </Link>

    );
}

export default Chat
