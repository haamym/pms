import React, { useState } from 'react';
import HeaderComp from '../components/headerComp';
import NavbarComp from '../components/navbarComp';
import ViewComp from '../components/ViewComp';

export default function Dashboard() {
    return (
        <section className="flex flex-col w-screen h-screen relative">
            <div className="relative">
                <header className="z-10 absolute w-full">
                    <HeaderComp />
                </header>
            </div>
            <div className="absolute top-0 left-0 h-screen z-20 w-80">
                <NavbarComp />
            </div>
        </section>
    );
}
