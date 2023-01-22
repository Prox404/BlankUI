import { BsCircleHalf } from "react-icons/bs";
import { useCallback, useState } from "react";


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleToggleMobileMenu = useCallback(() => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    })

    return (<>
        <header className="z-20 fixed top-0 md:w-full lg:w-[calc(100vw-88px)] 2xl:w-[calc(100vw-222px)] right-0">
            <nav className="bg-[var(--colorBGPrimary)] border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <BsCircleHalf className="mr-3 h-6 sm:h-9 text-2xl"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">BlankUI</span>
                    </a>
                    <div className="flex items-center order-2 md:order-1">
                        <a href="/" className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                        <a href="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Get started</a>
                        <button data-collapse-toggle="mobile-menu-2" onClick={handleToggleMobileMenu} type="button" className=" items-center p-2 ml-1 text-sm text-gray-500 rounded-lg hidden md:inline-flex hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className={`${isMobileMenuOpen ? 'md:flex' : 'md:hidden'} justify-between items-center md:w-full flex w-auto order-1`} id="mobile-menu-2">
                        <ul className="flex flex-row md:flex-col md:mt-4 font-medium mt-0">
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 md:bg-transparent md:text-primary-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 md:border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                            </li>
                            <li>
                                <a href="/" className="block py-2 pr-4 pl-3 text-gray-700 md:border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-primary-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>);
}

export default Header;