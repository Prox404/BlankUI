function TextArea({ 
    label = '',
    placeholder = '', 
    Error = '',
    Success = '',
    Info = '', 
    ...props }) {
        // hom hay om nen nhat code
    return (<>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea rows="4" className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder ? placeholder : ' '}></textarea>
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

export default TextArea;