function Checkbox({ className = '',...props}) {
    return ( <>
        <input type="checkbox" className={`${className} w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-50 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800`} {...props} />
    </> );
}

export default Checkbox;