import React from 'react'
import {ChatEngine} from 'react-chat-engine';
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <div>
            <ChatEngine 
                height="100vh"
                projectID="dd18747e-4759-43ea-a84b-be2b9c57a35c"
                userName={localStorage.getItem('username')}
                userSecret={localStorage.getItem('password')}
                renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
            />
        </div>
    )
}

export default App

