export function Button({children, ...props}) {
    return ( <button {...props} className="bg-sky-400 text-white p-2 rounded">{children}</button>
        );
}