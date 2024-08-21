import { Stethoscope } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-yellow/75 border-gray-200 dark:bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
                <Link to='/home' className="flex items-center space-x-3 rtl:space-x-reverse transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                    <div className="h-8">
                        <Stethoscope size={32} />
                    </div>
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dr Hans Chucrute</span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded={isOpen}
                    onClick={toggleMenu}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${isOpen ? '' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-black/25 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md: dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link to='/sobre' className="block py-2 px-3 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1 ">
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link to='/doencas' className="block py-2 px-3 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1">
                                Doenças
                            </Link>
                        </li>
                        <li>
                            <Link to='/clinica' className="block py-2 px-3 transition duration-500 ease-in-out hover:opacity-75 hover:text-red hover:-translate-y-1 ">
                                Clínica
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
