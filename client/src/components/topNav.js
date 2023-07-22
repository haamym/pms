import  SiteLogo from "../assets/img/logo.png"
import userProfile from "../assets/img/UserProfile.png"


export default function topNav(){



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
                    <p className='font-bold'>Haameem</p>
                </div>    
                <img className='max-h-14' src={userProfile}/>            
            </div>
        </>
    )


    
}