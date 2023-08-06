import React from "react";
import ProfilePictureComp from "./profilePictureComp";

export default function HeaderComp() {
    return (
        <header className="flex flex-row justify-between h-14 py-3">
            {/* tagline */}
            <div className="flex justify-center items-center flex-grow"> {/* Center the h1 */}
                <h1 className="text-xl font-medium italic text-theme">
                    Artusamak, Just what you need
                </h1>
            </div>
            <div className="flex items-center">
                <ProfilePictureComp />
            </div>
        </header>
    );
}
