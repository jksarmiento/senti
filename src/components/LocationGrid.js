import { useState, useEffect } from "react";
import LocationCard from "./LocationCard";

function LocationGrid(props) {
    const [locations, setLocations] = useState([]);
    const [carts, setCarts] = useState([]);

    const getLocations = () => {
        const axios = require("axios");
        axios
            .get("https://senticartapi.herokuapp.com/api/v1/locations")
            .then(function (response) {
                setLocations(response.data);
            })
            .catch(function (error) {})
            .then(function () {});
    };

    const getCarts = () => {
        const axios = require("axios");
        axios
            .get("https://senticartapi.herokuapp.com/api/v1/carts")
            .then(function (response) {
                setCarts(response.data);
            })
            .catch(function (error) {})
            .then(function () {});
    };

    useEffect(() => {
        if (props.monitor) {
            getLocations();
            getCarts();
            var locationInterval = setInterval(getLocations, 3000);
            var cartInterval = setInterval(getCarts, 3000);
        }
        return () => {
            clearInterval(locationInterval);
            clearInterval(cartInterval);
        };
    }, [props.monitor]);

    return (
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
    );
}

export default LocationGrid;
