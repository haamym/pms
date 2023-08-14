import { useState } from "react";
import SideNav from "../components/sideNav";
import TopNav from "../components/topNav";
import Facility from "../components/Facilities";
import View from '../components/View';


export default function Facilities() {
  const [createForm, setCreateForm] = useState(false)


  const createNewHandler = () =>{
    setCreateForm(true)
    
  }

  return (
    <section className="flex flex-col">
      <header className="flex items-center justify-between px-2 py-2 shadow">
        <TopNav />
      </header>
      <div className="flex  lg:h-[calc(100vh-80px)]">
        <SideNav />
        <div className="w-screen px-4 py-2 relative">
          <div className='flex '>
            <button onClick={createNewHandler} className='bg-transparent focus:bg-primary focus:text-[white] focus:shadow-lg hover:bg-primary text-[blue] font-semibold hover:text-[white] py-2 px-4 border border- hover:border-transparent rounded'>Create</button>
          </div>
          <div className='w-full h-full'>

          {createForm && <Facility/>}
          {/* <View/> */}
          </div>
          
            
        </div>
      </div>
    </section>
  )
}
