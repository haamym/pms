import React, { useState, useEffect } from 'react';

const mockData = {
    title: 'Sample Title',
    description: 'This is a sample description for the clicked item.',
    additionalInfo: 'Some more information goes here.',
};

const ViewComp = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!isVisible) {
            const timeoutId = setTimeout(() => {
                onClose();
            }, 1000);
            return () => clearTimeout(timeoutId);
        }
    }, [isVisible, onClose]);

    const handleClose = () => {
        setIsVisible(false);
    };

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className={`fixed top-0 left-0 w-full h-full backdrop-blur-sm backdrop-brightness-75 flex items-center justify-center transition-opacity ${isVisible ? 'duration-300 ease-in opacity-100' : 'duration-1000 ease-out opacity-0'
                }`}
        >
            <div className={`bg-primary text-theme rounded-lg p-6 max-w-sm shadow-md ${isVisible ? 'block' : 'hidden'}`}>
                <h2 className="text-xl font-bold mb-4">{mockData.title}</h2>
                <p className="mb-2">{mockData.description}</p>
                <p>{mockData.additionalInfo}</p>
                <button
                    className="mt-4 bg-theme border-theme text-primary border-2 hover:bg-primary hover:border-theme hover:text-theme font-semibold py-1 px-2 rounded-xl"
                    onClick={handleClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default ViewComp;
