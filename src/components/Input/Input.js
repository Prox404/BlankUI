function Input({
    type="text",
    className,
    disabled = false,
    Icon,
     ...props}) {
    return ( <div className="relative">
        {
            Icon && <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                {Icon}
            </div>
        }
        <input {...props} type={type} className={`${className} ${(type === "text" || type === "email" || type === "password") ? 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' : ''} ${disabled && 'cursor-not-allowed'} ${Icon && 'pl-10'}`} disabled={disabled}/>
    </div> );
}

export default Input;