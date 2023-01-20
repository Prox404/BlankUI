import classNames from 'classnames';
import Button from '~/components/Button';

const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
    setDark();
}

const toggleTheme = (e) => {
    if (e.target.checked) {
        setDark();
    } else {
        setLight();
    }
};

const logout = () => {
    localStorage.clear();
    window.location.href = '/';
    console.log('logout');
}

function MenuItem({ data, onClick, onThemeChange = false, onLogout = false }) {
    const classes = classNames(`
        w-full
        ml-0
        justify-start
        rounded-none
        font-semibold
        leading-5
        bg-transparent
        p-[10px 8px 10px 16px]
        text-[var(--colorTextPrimary)]
        border-none
        hover:bg-slate-200
        px-2
        py-[4px]
        [&.separate]:border-t-[1px] 
        [&.separate]:border-[var(--colorLineSecondary)]
        [&>span]:leading-[15px]
    `,  
        {'separate': data.separate}
        
    ) ;
    return (
        <Button className={classes} leftIcon={data.icon && data.icon} to={data.to} onClick={onLogout ? logout : onClick}>
            {data.title}
            {onThemeChange &&
                <div className="
                    flex flex-row items-end
                ">
                    <label className="
                        relative
                        inline-flex
                        items-center
                        cursor-pointer
                    " htmlFor="checkbox">
                        <input
                            type="checkbox"
                            id="checkbox"
                            className="sr-only peer"
                            onChange={toggleTheme}
                            defaultChecked={defaultDark}
                        />
                        <div className="
                           w-11
                           h-6
                           bg-gray-200
                           rounded-full
                           peer
                           
                           peer-checked:after:translate-x-full
                           peer-checked:after:border-white
                           after:content-['']
                           after:absolute
                           after:top-0.5
                           after:left-[2px]
                           after:bg-white
                           after:border-gray-300
                           after:border
                           after:rounded-full
                           after:h-5
                           after:w-5
                           after:transition-all
                           
                           peer-checked:bg-blue-600
                        "></div>
                    </label>
                </div>
            }
        </Button>
    );
}

export default MenuItem;