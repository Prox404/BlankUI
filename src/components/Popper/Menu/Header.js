function Header({ title, onBack }) {
    return (
        <header className="
            relative h-12 -mt-2 bg-slate-100
        ">
            <button className="
                w-12
                h-full
                bg-transparent
                cursor-pointer
            " onClick={onBack}>
                <svg width="1em" height="1em" viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.58579 22.5858L20.8787 6.29289C21.2692 5.90237 21.9024 5.90237 22.2929 6.29289L23.7071 7.70711C24.0976 8.09763 24.0976 8.7308 23.7071 9.12132L8.82843 24L23.7071 38.8787C24.0976 39.2692 24.0976 39.9024 23.7071 40.2929L22.2929 41.7071C21.9024 42.0976 21.2692 42.0976 20.8787 41.7071L4.58579 25.4142C3.80474 24.6332 3.80474 23.3668 4.58579 22.5858Z"></path></svg>
            </button>
            <h4 className="
                w-12 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
            ">{title}</h4>
        </header>
    );
}

export default Header;