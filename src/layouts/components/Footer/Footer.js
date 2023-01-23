function Footer() {
    return (<>
        <footer className="p-4 bg-[var(--colorBGPrimary)] flex items-center justify-between md:p-6 border-t-2 border-slate-100">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 flex flex-wrap items-center">© 2023 <a href="https://flowbite.com/" className="hover:underline">Prox™</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400">
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="/" className="mr-4 hover:underline md:mr-6">Licensing</a>
                </li>
                <li>
                    <a href="/" className="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    </>);
}

export default Footer;