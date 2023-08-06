import HeaderComp from '../components/headerComp';
import NavbarComp from '../components/navbarComp';

export default function dashboard() {

    return (
        <section className="flex flex-col">
            <header className="h-12 p-2.5 z-0">
                <HeaderComp/>
            </header>
            <div className="flex lg:h-[100vh] absolute z-10">
                <NavbarComp/>
                
                <div className="w-screen px-4 py-2">
                </div>
            </div>
        </section>
    );
}
