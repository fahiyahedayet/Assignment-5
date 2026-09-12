import { RxHamburgerMenu } from "react-icons/rx";
import logoText from '../assets/logo-text.png';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white px-4 py-2.5 dark:border-gray-100">
           <div className="mx-auto flex h-[70px] max-w-[1200px] items-center justify-between px-6 lg:px-10">
            <button className="md:hidden">
                <RxHamburgerMenu size={24}/>

            </button>

            <img src={logoText} alt="Dev Stack" />

            <nav className="hidden items-center gap-7 md:flex">
                <a href="#" className="text-sm text-pink-500 hover:text-gray-500">Home</a>
                <a href="#" className="text-sm text-gray-500 hover:text-pink-500">Technologies</a>
                <a href="#" className="text-sm text-gray-500 hover:text-pink-500">Projects</a>
                <a href="#" className="text-sm text-gray-500 hover:text-pink-500">About</a>
                <a href="#" className="text-sm text-gray-500 hover:text-pink-500">Contact</a>
            </nav>

            <div className ="flex items-center gap-3">
                <button className ="hidden text-sm text-gray-600 sm:block hover:text-pink-500">
                    Sign In
                </button>

                <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 px-5 py-2 text-sm font-medium text-white">
                    Sign Up
                </button>
            </div>

          </div>
        </nav>
    );

};

export default Navbar;