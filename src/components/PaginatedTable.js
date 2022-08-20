import StationTableRow from "./StationTableRow";
import { useState, useEffect } from "react";

function PaginatedTable(props) {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        if (props.monitor) {
            const getCarts = () => {
                const axios = require("axios");
                axios
                    .get("http://192.168.0.154:8000/api/v1/carts")
                    .then(function (response) {
                        setCarts(response.data);
                    })
                    .catch(function (error) {})
                    .then(function () {});
            };
            getCarts();
            var interval = setInterval(getCarts, 5000);
        }
        return () => clearInterval(interval);
    }, [props.monitor]);

    return (
        <table className="w-full border-y border-y-sky-900">
            <thead className="border-b border-y-sky-900">
                <tr>
                    <th className="py-1">Cart</th>
                    <th className="py-1">Location</th>
                    <th className="py-1">Status</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((cart) => (
                    <StationTableRow
                        cart={cart.id}
                        location={cart.current_location_id}
                        status={cart.status}
                        key={cart.id}
                    />
                ))}
            </tbody>
        </table>
    );
}

export default PaginatedTable;
