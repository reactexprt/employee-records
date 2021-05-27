import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import './Login.scss';


const LoginPage = () => {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const history = useHistory();

    useEffect(() => {
        // This changes tge HTML style for the current page to allow for a full screen background with no white bar
        document.getElementsByTagName("html")[0].style.height = '100%';
    });

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            email: 'gaurav@email.com',
            password: 'password'
        }

        if ((emailInput == hardcodedCred.email) && (passwordInput == hardcodedCred.password)) {
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            history.push('/sb');
        } else {
            alert('wrong email or password combination');
        }
    }

    return (

        <div className="login-content">
            <div className="ui segment login-container">

                <h2 className="header">Records portal</h2>

                <div className="ui form">
                    <form autoComplete="off" onSubmit={handleLoginSubmit}>
                        <input
                            type="email"
                            name="email"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            value={emailInput}
                            onChange={handleEmailChange}
                        />
                        <input
                            type="password"
                            name="password"
                            autoComplete="new-password"
                            placeholder="Password"
                            value={passwordInput}
                            onChange={handlePasswordChange}
                        />
                    </form>
                </div>
                <div className="button-section">
                    <button className="login-button" type="submit" onClick={handleLoginSubmit}>
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;