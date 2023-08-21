import RegisterComp from '../components/registerComp';
import React from 'react'
import SideNav from "../components/SideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";


export default function register(){


    return(
        <section className="flex flex-col">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2">
          <div className='flex '>
            <button className='bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded'>Create</button>
          </div>
          <div>

          <Facility/>
          </div>
          
            
        </div>
      </div>
    </section>
    )
}