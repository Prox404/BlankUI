function Checkbox({ className = '',disabled = false, Label = '', Helper = '', ...props }) {
    return (<>
        <div className="flex items-center">
            <div className="flex items-center h-5">
                <input aria-describedby="helper-checkbox-text" type="checkbox" className={`${className} w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-50 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800`}  {...props} disabled={disabled}/>
            </div>
            <div className="ml-2 text-sm">
                {
                    Label && <label for="helper-checkbox" className={`${disabled ? 'text-gray-400 dark:text-gray-500' : ' text-gray-900 dark:text-gray-300'} `}>{Label}</label>
                }
                {
                    Helper && <p id="helper-checkbox-text" className="text-xs font-normal text-gray-500 dark:text-gray-400">{Helper}</p>
                }
                
            </div>
        </div>
    </>);
}

export default Checkbox;