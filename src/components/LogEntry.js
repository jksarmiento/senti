function LogEntry(props) {
    return (
        <tr className="odd:bg-slate-900">
            <td className="py-1 pr-1 pl-3">{props.count}</td>
            <td className="py-2 pl-1 pr-2">
                Cart #{" "}
                <span className="mx-1 rounded-md bg-slate-700 px-3 text-sm font-bold shadow">
                    {props.id}
                </span>{" "}
                {props.status && (
                    <>
                        went{" "}
                        <span
                            className={
                                (props.status === "IN"
                                    ? "bg-green-600 px-4"
                                    : "bg-red-600 px-2") +
                                " mx-1 rounded-md text-sm font-bold shadow"
                            }
                        >
                            {props.status}
                        </span>
                    </>
                )}
                {props.location && (
                    <>
                        arrived at location #{" "}
                        <span className="mx-1 rounded-md bg-slate-700 px-3 text-sm font-bold shadow">
                            {props.location}
                        </span>
                    </>
                )}{" "}
                on{" "}
                <span className="mx-1 rounded-md bg-slate-700 px-3 text-sm font-bold shadow">
                    {props.time}
                </span>
                .
            </td>
        </tr>
    );
}

export default LogEntry;
