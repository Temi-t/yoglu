import React, {useState, useEffect} from 'react';
import Login from './Login';
import HomePage from '../features/home/HomePage';
import { Hub } from '@aws-amplify/core';


function App () {
    const [currentUser, setCurrentUser] = useState(false);
    useEffect(() => {
        Hub.listen('auth', (e)=>{
            console.log("authEvent::: ", e)
            setCurrentUser(e.payload.data);
        })
    });
    return(
        <div className="App">
            { currentUser ? <HomePage /> : < Login/> }
        </div>
    )
}

export default App;