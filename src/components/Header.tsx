import { Link } from "react-router-dom";
import { Turn as Hamburger } from "hamburger-react"
import { useState } from "react";
import logo from "../assets/logo-texto-curadoensalud.svg"

const Header = () => {
    const [showNavBar, setShowNavbar] = useState(false)
    return (
        <header className="flex-col w-full font-josefineSans px-6 md:px-0">
            <div className="w-full flex justify-between md:justify-center items-center md:pb-6 pt-6 font-bold  text-greyDark2">
                <Link to=''>
                    <h1 className="md:text-6xl text-4xl sm:text-5xl">
                        <img src={logo} height={150} width={150 * 16 / 9} className='fill-main' alt='Curado en salud. Logo y título de la web.' />
                    </h1>
                </Link>
                <div className="md:hidden">
                    <Hamburger toggled={showNavBar} toggle={setShowNavbar} />
                </div>
            </div>
        </header>
    );
}

export default Header;