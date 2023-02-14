function Input({
    type = "text",
    className,
    Addon = null,
    disabled = false,
    Icon = null,
    ...props }) {
    return (<div className={`${Icon && 'relative'} ${Addon && 'flex'}`}>
        {
            Icon && <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {Icon}
            </div>
        }
        {
            Addon && <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
                {Addon}
            </span>
        }
        <input {...props} type={type} className={`${className} ${(type === "text" || type === "email" || type === "password") ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : ''} ${disabled && 'cursor-not-allowed'} ${Icon && 'pl-10'} ${Addon ? 'rounded-r' : 'rounded-lg'}`} disabled={disabled} />
    </div>);
}

export default Input;