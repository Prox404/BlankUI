function Avatar({
    src='',
    alt='',
    size= 5,
    className,
    rounded='full',
    bordered = false,
    ...props
}) {
    return ( <>
        <img src={src} alt={alt} className={`w-${size} h-${size}  ${rounded === 'full' ? 'rounded-full' : 'rounded-md'} ${className} ${bordered ? 'p-1 ring-2 ring-gray-300 dark:ring-gray-500' : ''}`} {...props} />
    </> );
}

export default Avatar;