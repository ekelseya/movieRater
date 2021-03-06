import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { API } from "../APIservice";
import { StyledForm } from "./styles/Form.styled";

function Auth() {

    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ isLoginView, setIsLoginView ] = useState(true);
    const [token, setToken] = useCookies(['mr-token']);

    useEffect( () => {
        if(token['mr-token']) window.location.href = '/movies';
    }, [token])

    const signInClicked = () => {
        API.loginUser({username, password})
            .then( resp => setToken('mr-token', resp.token))
            .catch( error => console.log(error))
    }

    const signUpClicked = () => {
        API.registerUser({username, password})
            .then( () => signInClicked())
            .catch( error => console.log(error))
    }

    const isDisabled = username.length === 0 || password.length === 0;

    return (
        <StyledForm>
            <form>
                {isLoginView ? <h2>Sign In</h2> : <h2>Register</h2>}
                <label htmlFor="username">Username</label>
                <input type="text" id="username"
                       value={username} placeholder="username"
                       onChange={ evt => setUsername(evt.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" id="password"
                       value={password} placeholder="password"
                       onChange={ evt => setPassword(evt.target.value)} />
                {isLoginView ?
                    <button onClick={signInClicked} disabled={isDisabled}>Sign In</button> :
                    <button onClick={signUpClicked} disabled={isDisabled}>Register</button>
                }
                {isLoginView ?
                    <p onClick={() => setIsLoginView(false)}>No account? Click here to register!</p> :
                    <p onClick={() => setIsLoginView(true)}>Already have an account? Click here to sign in!</p>
                }
            </form>
        </StyledForm>
    )
}

export default Auth;