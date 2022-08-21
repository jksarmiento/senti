import { useState, useEffect } from "react";
import CartCard from "./CartCard";

function CartGrid(props) {
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        if (props.monitor) {
            const getCarts = () => {
                const axios = require("axios");
                axios
                    .get("http://senticartapi.herokuapp.com/api/v1/carts")
                    .then(function (response) {
                        setCarts(response.data);
                    })
                    .catch(function (error) {})
                    .then(function () {});
            };
            getCarts();
            var interval = setInterval(getCarts, 3000);
        }
        return () => clearInterval(interval);
    }, [props.monitor]);

    return (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {carts.map((cart) => (
                <CartCard
                    cart={cart.id}
                    location={cart.current_location_id}
                    status={cart.status}
                    key={cart.id}
                />
            ))}
        </div>
    );
}

export default CartGrid;
