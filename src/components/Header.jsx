import { Link } from "react-router-dom";
import logo from '../assets/logos_isotipo_p.svg';
import Dropdown from "./Dropdown";
import SocialMedia from "./SocialMedia";

const Header = () => {
   return (
      <nav className="font-cairo bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 font-extralight">
         <div className="flex flex-wrap items-center  justify-between w-full p-4 md:mx-auto md:px-7 lg:max-w-screen-lg">
            <div id="navbar-menu" className="hidden w-full order-3 md:flex md:w-auto md:order-1 md:flex-grow">
               <ul className="flex items-center flex-col p-4 md:p-0 mt-4 border border-[#01569D] rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
                  {/*<li>
                     <Link to="#">
                        <span className="block py-2 px-3 text-white bg-[#01569D] rounded md:bg-transparent md:text-[#01569D] md:p-0" aria-current="page">
                           Sobre mí
                        </span>
                     </Link>
                  </li>*/}
                  <li>
                     <Dropdown/>
                  </li>
               </ul>
            </div>
            <div className="flex items-center space-x-3 rtl:space-x-reverse order-1 md:order-2 md:flex-grow-0">
               <Link to="/">
                  <img src={logo} className="w-12 h-12" alt="David Becas"/>
               </Link>
            </div>
            <div id="navbar-social" className="items-center hidden my-1 mx-auto order-4 md:flex md:justify-end md:w-auto md:order-3 md:my-0 md:mx-0 md:flex-grow">
               <div className="flex items-center space-x-2">
                  <span>Siguenos en:</span>
                  <SocialMedia 
                     classes={'hover:bg-[#01569D] hover:text-white'}
                  />
               </div>  
            </div>
            <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse order-2">
               <button onClick={() => { document.getElementById('navbar-menu').classList.toggle('hidden');
                  document.getElementById('navbar-social').classList.toggle('hidden');
               }}
                  data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-xl text-[#01569D] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-sticky" aria-expanded="false">
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path className='stroke-2 stroke-current' stroke-linecap="round" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
               </button>
            </div>
         </div>
      </nav>
   )
}

export default Header