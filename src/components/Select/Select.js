function Select({
    Label = '',
    Error = '',
    Success = '',
    Info = '', 
    Options = [],
    Selected = 0,
    ...props }) {
    return (<>
        <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{Label}</label>
        <select className="bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" {...props}>
            {
                Options && Options.map((option, index) => {
                    return <option key={index} value={option.value} selected={index === Selected}>{option.label}</option>
                })
            }
        </select>
        {
            Success && <p class="mt-2 text-sm text-green-600 dark:text-green-500">{Success}</p>
        }
        {
            Error && <p class="mt-2 text-sm text-red-600 dark:text-red-500">{Error}</p>
        }
        {
            Info && <p class="mt-2 text-sm text-blue-500 dark:text-blue-400">{Info}</p>
        }
    </>);
}

export default Select;