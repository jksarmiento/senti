import { useState, useEffect } from "react";
import CartCard from "./CartCard";
import { DotsHorizontalIcon } from "@heroicons/react/solid";

function CartGrid(props) {
    const [loaded, setLoaded] = useState(false);
    const [carts, setCarts] = useState([]);

    const droot = "https://senticartapi.herokuapp.com";

    const getCarts = () => {
        const axios = require("axios");
        axios
            .get(droot + "/api/v1/carts")
            .then(function (response) {
                setCarts(response.data);
                setLoaded(true);
            })
            .catch(function (error) {})
            .then(function () {});
    };

    useEffect(() => {
        getCarts();
        if (props.monitor) {
            var interval = setInterval(getCarts, 3000);
        }
        return () => clearInterval(interval);
    }, [props.monitor]);

    return (
        <>
            {!loaded && (
                <div className="my-20 flex animate-pulse items-center justify-center">
                    <DotsHorizontalIcon className="w-8" />
                </div>
            )}
            {loaded && (
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
            )}
        </>
    );
}

export default CartGrid;
