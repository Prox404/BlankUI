function TextArea({ label = '', placeholder = '', ...props }) {
    return (<>
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
        <textarea rows="4" className="block p-2.5 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder ? placeholder : ' '}></textarea>
    </>);
}

export default TextArea;