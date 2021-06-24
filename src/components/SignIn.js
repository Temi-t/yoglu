import React from "react";
import { useUserName, useUserPassword } from "../contexts/RegisterContext";

// import { Auth } from "aws-amplify";

export default function SignIn () {
    const [userName, setUserName]= useUserName();
    const [userPassword, setUserPassword] = useUserPassword();
    const handleSignIn = (e) => {
        e.preventDefault()
        // let response = await Auth.signIn(userDetail.userEmail, userDetail.userPassword);
        console.log('Auth response ==> ', response)
        // setUserName(prev=>({...prev, name: ''}));
        // setUserPhone(prev=>({...prev, phoneNumb: ''}));
        // setUserEmail(prev=>({...prev, email: ''}));
    }
    return(
            <form onSubmit={handleSignIn}>
                <h1>Sign in to your account</h1>
                <h6>Or create one</h6>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="*********" />
                <button type="submit">Sign in</button>
            </form>
    );
}