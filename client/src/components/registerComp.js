            {/* input of email
            input of username
            input of password
            input of phone number
            btn submit */}

export default function registerComp(){
    
    return(
        <form className ='flex flex-col border w-fit p-4 rounded-lg gap-2 font-bold '>
            <div className='flex'>
            <div>
                <label className='mr-4'>Username</label>
                <input className='border' type='text' name='usernmae'></input>
            </div>
            <div >
                <label className=''>Email</label>               
                <input className='border' type='email' name='email'></input>
            </div>
            </div>
            <div>s
                <label className=''>Password</label>
                <input className='border' type='password' name='password'></input>
            </div>
            <button className='mt-4'>Submit</button>
        </form>

    )
}