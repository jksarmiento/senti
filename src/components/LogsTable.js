import LogEntry from "./LogEntry";

function LogsTable(props) {
    return (
        <div className="pt-4">
            <table className="w-full">
                <thead>
                    <tr className="border-b border-b-sky-900">
                        <th className="w-1/4 py-1 pr-1 pl-3 text-left">#</th>
                        <th className="w-3/4 p-1 text-left">LOG</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-sky-900">
                    {props.logs.map((log) => (
                        <LogEntry
                            key={log.id}
                            count={log.id}
                            id={log.cart_id}
                            status={
                                props.type === "status" ? log.status : undefined
                            }
                            location={
                                props.type === "location"
                                    ? log.location_id
                                    : undefined
                            }
                            time={log.created_at}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default LogsTable;
