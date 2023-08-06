import React from "react";

export default function ProfilePictureComp() {
    return (
        <div className="flex align-middle justify-center h-10 w-10 rounded-full border-2 mr-2 border-theme">
            <svg className="h-8 w-8 fill-theme" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 32 32" viewBox="0 0 32 32" id="profile"><circle cx="16" cy="7.46" r="6.96" transform="rotate(-9.217 16 7.46)"></circle><path d="M0.78998,24.04999C0.78998,28.15997,4.13,31.5,8.23999,31.5h15.52002c4.10999,0,7.45001-3.34003,7.45001-7.45001s-3.34003-7.45001-7.45001-7.45001H8.23999C4.13,16.59998,0.78998,19.94,0.78998,24.04999z"></path></svg>
        </div>
    );
}