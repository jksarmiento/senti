function Header(props) {
    return (
        <header
            className={
                (props.border ? "border-b border-sky-700 xl:border-x" : "") +
                " mx-auto max-w-7xl bg-slate-800"
            }
        >
            <div className="py-5 px-4 sm:px-6 lg:px-8">
                <h1 className="text-2xl text-slate-200">{props.value}</h1>
            </div>
        </header>
    );
}

export default Header;
