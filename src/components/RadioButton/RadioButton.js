function RadioButton({ className = '', disabled = false, Label = '', Helper = '', ...props }) {
    return (<>
        <div className="flex items-center">
            <div class="flex items-center h-5">
                <input aria-describedby="helper-radio-text" type="radio" class={`${className} w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600`} {...props} disabled={disabled} />
            </div>
            <div class="ml-2 text-sm">
                {
                    Label && <label for="helper-radio" class={`${disabled ? 'text-gray-400 dark:text-gray-500' : ' text-gray-900 dark:text-gray-300'} `}>{Label}</label>
                }
                {
                    Helper && <p id="helper-radio-text" class="text-xs font-normal text-gray-500 dark:text-gray-400">{Helper}</p>
                }

            </div>
        </div>
    </>);
}

export default RadioButton;