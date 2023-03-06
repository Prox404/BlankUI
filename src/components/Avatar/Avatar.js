function Avatar({
    src='',
    alt='',
    size= 5,
    className,
    rounded='full',
    ...props
}) {
    return ( <>
        <img src={src} alt={alt} className={`w-${size} h-${size}  ${rounded === 'full' ? 'rounded-full' : 'rounded-md'} ${className}`} {...props} />
    </> );
}

export default Avatar;