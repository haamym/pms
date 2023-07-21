import HeaderComp from '../components/headerComp';
import NavbarComp from '../components/navbarComp';
import CarouselComp from '../components/carouselComp';

export default function dashboard() {

    return (
        <section className="flex min-h-screen">
            <div>
                    <NavbarComp />
                    <HeaderComp />
            </div>
            <div>
                <CarouselComp />
            </div>
        </section>
    );
}
