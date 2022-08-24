import { useState, useEffect } from "react";
import { Tab, Switch } from "@headlessui/react";
import { DotsHorizontalIcon } from "@heroicons/react/solid";
import LogsTable from "../components/LogsTable";

function Logs() {
    const [loaded, setLoaded] = useState(false);
    const [monitoring, setMonitoring] = useState(false);
    const [statusLogs, setStatusLogs] = useState([]);
    const [locationLogs, setLocationLogs] = useState([]);

    const droot = "https://senticartapi.herokuapp.com";

    const getStatusLogs = () => {
        const axios = require("axios");
        axios
            .get(droot + "/api/v1/log_statuses")
            .then(function (response) {
                setStatusLogs(response.data);
            })
            .catch(function (error) {})
            .then(function () {});
    };
    const getLocationLogs = () => {
        const axios = require("axios");
        axios
            .get(droot + "/api/v1/log_locations")
            .then(function (response) {
                setLocationLogs(response.data);
                setLoaded(true);
            })
            .catch(function (error) {})
            .then(function () {});
    };
    useEffect(() => {
        getStatusLogs();
        getLocationLogs();
        if (monitoring) {
            var interval = setInterval(() => {
                getStatusLogs();
                getLocationLogs();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [monitoring]);

    return (
        <div className="py-6 px-4 text-slate-200 sm:px-6 lg:px-8">
            <Switch.Group>
                <div className="mb-4 flex items-center">
                    <Switch
                        checked={monitoring}
                        onChange={setMonitoring}
                        className={
                            (monitoring ? "bg-sky-500" : "bg-slate-600") +
                            " relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
                        }
                    >
                        <span
                            className={
                                (monitoring
                                    ? "translate-x-6"
                                    : "translate-x-1") +
                                " inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
                            }
                        ></span>
                    </Switch>
                    <Switch.Label className="ml-2 hidden sm:block">
                        Real-time Monitoring
                    </Switch.Label>
                </div>
            </Switch.Group>
            <Tab.Group manual>
                <Tab.List className="flex space-x-1 border-b border-b-sky-700 px-1 pt-1">
                    <Tab
                        as="button"
                        className={({ selected }) =>
                            selected
                                ? "rounded-t-md border-x border-t border-x-sky-700 border-t-sky-700 bg-slate-900 p-2 text-slate-200"
                                : "rounded-t-md border-x border-t border-x-slate-800 border-t-slate-800 p-2 text-slate-400"
                        }
                    >
                        Status
                    </Tab>
                    <Tab
                        as="button"
                        className={({ selected }) =>
                            selected
                                ? "rounded-t-md border-x border-t border-x-sky-700 border-t-sky-700 bg-slate-900 p-2 text-slate-200"
                                : "rounded-t-md border-x border-t border-x-slate-800 border-t-slate-800 p-2 text-slate-400"
                        }
                    >
                        Location
                    </Tab>
                </Tab.List>
                {!loaded && (
                    <div className="mt-4 flex animate-pulse items-center justify-center">
                        <DotsHorizontalIcon className="w-8" />
                    </div>
                )}
                {loaded && (
                    <Tab.Panels>
                        <Tab.Panel>
                            <LogsTable type="status" logs={statusLogs} />
                        </Tab.Panel>
                        <Tab.Panel>
                            <LogsTable type="location" logs={locationLogs} />
                        </Tab.Panel>
                    </Tab.Panels>
                )}
            </Tab.Group>
        </div>
    );
}

export default Logs;
