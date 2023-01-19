function Wrapper({ children, className }) {
    return <div className={[
        `
        w-full
        flex
        flex-col
        rounded-lg
        overflow-hidden
        min-h-[100px]
        max-h-[min(100vh-96px, 500px)]
        bg-[var(--popperBackground)]
        border-2
        [&>a]:border-b-2
        [&>a]border-slate-300
        [&>a:last-child]border-b-0
        [&>a]:border-solid
        `,
        className
    ]}>
        {children}
    </div>;
}

export default Wrapper;