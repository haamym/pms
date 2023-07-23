import SideNav from "../components/sideNav"
import TopNav from '../components/topNav'
import Facility from '../components/facilities'

export default function dashboard(){


    return (
        <section className="flex flex-col">
            <header className="flex items-center justify-between px-2 py-2 shadow">
                <TopNav/>
            </header>
            <div className="flex  lg:h-[calc(100vh-80px)]">
                <SideNav/>
                <div className="w-screen px-4 py-2 relative">
                    <Facility/>

                </div>
            </div>
        </section>
    )
}