function LocationCard(props) {
    return (
        <div className="flex flex-col gap-2 rounded-md bg-gradient-to-b from-sky-800 to-sky-900 p-4 text-center shadow">
            <div className="rounded-md border border-sky-500">
                <h1>#{props.id}</h1>
            </div>
            <div className="rounded-md border border-sky-500">
                <h1 className="border-b border-sky-500 text-xs font-bold">
                    CARTS
                </h1>
                {props.carts.length === 0 && (
                    <p>
                        <span className="mx-1 rounded-md bg-slate-800 px-3 text-sm font-bold shadow">
                            EMPTY
                        </span>
                    </p>
                )}
                {props.carts.map((cart) => (
                    <p key={cart.id}>
                        <span className="mx-1 rounded-md bg-slate-800 px-3 text-sm font-bold shadow">
                            {cart.id}
                        </span>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default LocationCard;
