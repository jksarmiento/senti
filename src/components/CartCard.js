function CartCard(props) {
    return (
        <div className="flex flex-col gap-2 rounded-md bg-gradient-to-b from-sky-800 to-sky-900 p-4 text-center shadow">
            <div className="rounded-md border border-sky-500">
                <h1>#{props.cart}</h1>
            </div>
            <div className="rounded-md border border-sky-500">
                <h1 className="border-b border-sky-500 text-xs font-bold">
                    LOCATION
                </h1>
                <p>{props.location}</p>
            </div>
            <div className="rounded-md border border-sky-500">
                <h1 className="border-b border-sky-500 text-xs font-bold">
                    STATUS
                </h1>
                <span
                    className={
                        (props.status === "IN"
                            ? "bg-green-600 px-4"
                            : "bg-red-600 px-2") +
                        " rounded-md text-sm font-bold shadow"
                    }
                >
                    {props.status}
                </span>
            </div>
        </div>
    );
}

export default CartCard;
