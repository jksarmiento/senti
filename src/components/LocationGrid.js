import { useState, useEffect } from "react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import LocationCard from "./LocationCard";

function LocationGrid(props) {
    const [loaded, setLoaded] = useState(false);
    const [locations, setLocations] = useState([]);
    const [carts, setCarts] = useState([]);

    const droot = "https://senticartapi.herokuapp.com";

    const getLocations = () => {
        const axios = require("axios");
        axios
            .get(droot + "/api/v1/locations")
            .then(function (response) {
                setLocations(response.data);
            })
            .catch(function (error) {})
            .then(function () {});
    };

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
        getLocations();
        getCarts();
        if (props.monitor) {
            var locationInterval = setInterval(getLocations, 3000);
            var cartInterval = setInterval(getCarts, 3000);
        }
        return () => {
            clearInterval(locationInterval);
            clearInterval(cartInterval);
        };
    }, [props.monitor]);

    return (
        <>
            {!loaded && (
                <div className="my-20 flex animate-pulse items-center justify-center">
                    <DotsHorizontalIcon className="w-8" />
                </div>
            )}
            {loaded && (
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
                    {locations.map((location) => {
                        const cartsInLocation = [];

                        for (let i = 0; i < carts.length; i++) {
                            if (location.id === carts[i].current_location_id) {
                                cartsInLocation.push(carts[i]);
                            }
                        }

                        return (
                            // get carts that is in the current location and pass that in
                            <LocationCard
                                id={location.id}
                                carts={cartsInLocation}
                                key={location.id}
                            />
                        );
                    })}
                </div>
            )}
        </>
    );
}

export default LocationGrid;
