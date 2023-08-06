import React, { useState } from 'react';

export default function ProfileComp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    return (
        <section className="font-['Montserrat'] flex justify-center items-center h-screen bg-background">
            <div className="w-full max-w-sm bg-primary p-6 rounded-lg drop-shadow-xl">
                <h1 className="font-medium text-dark-background text-3xl mb-6 text-center">Edit Profile</h1>
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
                            type="text"
                            id="email"
                            className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="text-dark-background block mb-2">Phone Number</label>
                        <input
                            type="text"
                            id="phone"
                            className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker"
                            value={phone}
                            onChange={handlePhoneChange}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="address" className="text-dark-background block mb-2">Address</label>
                        <input
                            type="text"
                            id="address"
                            className="w-full px-3 py-2 border border-dark-background rounded-md focus:outline-none focus:border-primary-darker"
                            value={address}
                            onChange={handleAddressChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button type="submit" className="font-semibold bg-theme text-dark-background hover:text-primary py-2 px-4 rounded-md hover:bg-dark-background">Complete</button>
                    </div>
                </form>
            </div>
        </section>
    );
}
