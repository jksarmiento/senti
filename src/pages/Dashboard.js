import { useState } from "react";
import { Switch } from "@headlessui/react";
// import PaginatedTable from "../components/PaginatedTable";
import CartGrid from "../components/CartGrid";

function Dashboard() {
    const [monitoring, setMonitoring] = useState(true);

    return (
        <div className="py-6 px-4 text-slate-200 sm:px-6 lg:px-8">
            <div className="flex justify-between">
                <h2 className="text-xl">Carts</h2>
                <Switch.Group>
                    <div className="flex items-center">
                        <Switch.Label className="mr-4">
                            Real-time Monitoring
                        </Switch.Label>
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
                    </div>
                </Switch.Group>
            </div>
            <div className="mt-4">
                <CartGrid monitor={monitoring} />
            </div>
        </div>
    );
}

export default Dashboard;
