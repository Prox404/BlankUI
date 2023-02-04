function GoogleInput({className='',disabled = false, Label='', id='',...props}) {
    return (<div className="relative z-0 w-full mb-6 group">
        <input id={id} className={`${className} block py-2.5 px-3 w-full text-sm text-gray-900 bg-transparent border-[1px] rounded-md border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`} {...props} placeholder=" " disabled={disabled}/>
        <label htmlFor={id} className="peer-focus:font-medium absolute bg-[var(--colorBGPrimary)] text-sm peer-focus:text-xs text-gray-500 ml-3 dark:text-gray-400 duration-300 transform peer-focus:-translate-y-5 top-3 z-10 origin-[0] px-2 rounded-md peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-[&:not(:placeholder-shown)]:-translate-y-5 peer-[&:not(:placeholder-shown)]:text-xs">{Label}</label>
    </div>);
}

export default GoogleInput;