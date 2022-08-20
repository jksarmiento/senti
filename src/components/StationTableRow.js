function StationTableRow(props) {
    return (
        <tr className="border-b border-y-sky-900">
            <td className="py-2 text-center">{props.cart}</td>
            <td className="py-2 text-center">{props.location}</td>
            <td className="py-2 text-center">
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
            </td>
        </tr>
    );
}

export default StationTableRow;
