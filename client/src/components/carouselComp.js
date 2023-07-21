import React from 'react';
import bgimage from '../assets/images/background.png';

export default function CarouselComp() {
    return (
        <>
            <div class="Wrapper">
                <img className="bg-cover bg-center h-screen" src={bgimage} alt='background'></img>
            </div>
        </>
    );
}