import { useState } from "react";
import { Switch } from "@headlessui/react";
import CartGrid from "../components/CartGrid";
import LocationGrid from "../components/LocationGrid";

function Dashboard() {
    const [monitoring, setMonitoring] = useState(false);
    // const [amount, setAmount] = useState(10);

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
                    <Switch.Label className="ml-2 block">
                        Real-time Monitoring
                    </Switch.Label>
                </div>
            </Switch.Group>
            <div className="flex justify-between">
                <div className="flex items-center">
                    <h2 className="mr-4 text-xl">Carts</h2>
                </div>
                {/* <label>
                    Rows
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="ml-2 w-14 rounded-md border border-sky-700 bg-slate-800 py-1 pl-2 pr-1 text-slate-100 shadow-sm outline-0 focus:border-sky-300 focus:ring-2 focus:ring-sky-300 focus:ring-opacity-50"
                        min="1"
                        max="10"
                    />
                </label> */}
            </div>
            <div className="my-4">
                <CartGrid monitor={monitoring} />
            </div>
            <div>
                <h2 className="text-xl">Locations</h2>
            </div>
            <div className="mt-4">
                <LocationGrid monitor={monitoring} />
            </div>
        </div>
    );
}

export default Dashboard;
