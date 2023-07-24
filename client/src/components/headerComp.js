import React from 'react';
import { slide as Menu } from "react-burger-menu";

export default function HeaderComp() {
    return (
        <>
            {/* Mobile Styles */}
            <header className="fixed top-9 left-4 right-0 text-theme text-center p-4 block md:hidden">
                <h1 className="uppercase text-xs font-semibold">Artusamak, Just what you need</h1>
            </header>

            {/* Desktop Styles */}
            <header className="fixed top-5 left-4 right-0 text-theme text-center p-4 hidden md:block">
                <h1 className="uppercase text-lg font-semibold">Artusamak, Just what you need</h1>
            </header>
        </>
    );
}
