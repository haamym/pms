import React, { useState } from 'react';

export default function RegisterComp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [emailValid, setEmailValid] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        validateEmail(inputValue);
    };

    const validateEmail = (inputValue) => {
        const emailRegex = /^[\w-.]+@(gmail|yahoo)\.com$/;
        setEmailValid(emailRegex.test(inputValue));
    };

    return (
        <section className="font-['Montserrat'] flex justify-center items-center h-screen bg-background">
            <div className="w-full max-w-sm bg-primary p-6 rounded-lg drop-shadow-xl">
                <h1 className="font-medium text-dark-background text-3xl mb-6 text-center">Register</h1>
                <form>
                    <div className="mb-4">
                        <label htmlFor="username" className="text-dark-background block mb-2">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker"
                            value={username}
                            onChange={handleUsernameChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-dark-background block mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            className={`w-full px-3 py-2 border ${emailValid ? 'border-success' : 'border-danger'
                                } rounded-md focus:outline-none focus:border-primary-darker`}
                            value={email}
                            onChange={handleEmailChange}
                        />
                        {!emailValid && (
                            <p className="text-danger mt-1">Invalid email. Please enter a valid Gmail or Yahoo email.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-dark-background block mb-2">Password</label>
                        <input type="password" id="password" className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="repeat-password" className="text-dark-background block mb-2">Repeat Password</label>
                        <input type="password" id="repeat-password" className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker" />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="font-semibold bg-theme text-dark-background hover:text-primary py-2 px-4 rounded-md hover:bg-dark-background">Register</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
