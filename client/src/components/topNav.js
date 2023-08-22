import  SiteLogo from "../assets/img/logo.png"
import userProfile from "../assets/img/UserProfile.png"
import Cookie from 'universal-cookie'
import { useState, useContext, useEffect } from "react";
import { LoginContext } from "../context/CreateContext";


export default function TopNav(){
    const { token, user } = useContext(LoginContext);
    const [profileName, setProfileName] = useState()

    useEffect(() => {
        if(user){
            setProfileName(user.user_name)
        }
    }, [user])
    
    const handleProfMenu = () => {
        const profileContainer = document.getElementById('profile-container')
        profileContainer.classList.toggle('hidden')
    }

    const handleLogout = () => {
        const cookie = new Cookie()
        cookie.remove('token-proptyhub')
        window.location.href = '/'
    }

    const handleProfileClick = (event) => {
        console.log(event.target)
    }

    return(
        <>
            <div className="flex items-center">
                <img className="h-[3.5rem] w-[3.5rem] mr-4" src={SiteLogo} alt="proptyhub"></img>
                <h1 className="font-bold">PROPTYHUB</h1>
            </div>
            <div className='w-2/6'>
                <input className='border border-[#b6b3b3] focus:outline-none w-[100%] px-3 py-2 rounded-lg' type='search' placeholder='Search'/>
            </div>
            <div className='flex items-center'>
                <div className='flex flex-col mr-4 '>
                    <p className='font-thin'>Welcome</p>
                    <p className='font-bold'>{profileName ? profileName : "Unknown"}</p>
                </div>    
                <img onClick={handleProfMenu} className='max-h-14 cursor-pointer' src={userProfile}/>  
                <div id="profile-container" className="absolute top-[5rem] shadow-xl px-2 py-2 w-36 text-center z-10 hidden">
                    <ul className="">
                        <li onClick={handleProfileClick} className=" py-1 cursor-pointer text-[#888484] hover:text-[#fff] hover:bg-primary rounded">Profile</li>
                        <li onClick={handleLogout} className="py-1 cursor-pointer text-[#888484] hover:text-[#fff] hover:bg-primary rounded">Logout</li>
                    </ul>
                </div>          
            </div>
        </>
    )


    
}