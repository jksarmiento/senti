import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

function Settings() {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isLocationOpen, setIsLocationOpen] = useState(false);

    const droot = "https://senticartapi.herokuapp.com";

    const createCart = () => {
        const axios = require("axios");
        axios.post(droot + "/api/v1/carts", {
            current_location_id: "4",
            status: "IN",
        });
    };

    const createLocation = () => {
        const axios = require("axios");
        axios.post(droot + "/api/v1/locations", {});
    };

    return (
        <div className="py-6 px-4 text-slate-200 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start gap-4">
                <button
                    type="button"
                    className="rounded-md bg-slate-600 px-4 py-2 shadow-md hover:bg-slate-700"
                    onClick={() => setIsCartOpen(true)}
                >
                    Add Cart
                </button>
                <button
                    type="button"
                    className="rounded-md bg-slate-600 px-4 py-2 shadow-md hover:bg-slate-700"
                    onClick={() => setIsLocationOpen(true)}
                >
                    Add Location
                </button>

                <Transition appear show={isCartOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={() => setIsCartOpen(false)}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-sky-50 p-6 text-center align-middle font-sans shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="bold text-lg font-bold leading-6 text-slate-900"
                                        >
                                            Are you sure you want to add a cart?
                                        </Dialog.Title>
                                        <div className="mt-4 flex items-center justify-center gap-4">
                                            <button
                                                type="button"
                                                className="rounded-lg bg-red-600 bg-opacity-30 px-4 py-1 hover:bg-opacity-60"
                                                onClick={() =>
                                                    setIsCartOpen(false)
                                                }
                                            >
                                                NO
                                            </button>
                                            <button
                                                type="button"
                                                className="rounded-lg bg-sky-600 bg-opacity-30 px-4 py-1 hover:bg-opacity-60"
                                                onClick={() => {
                                                    createCart();
                                                    setIsCartOpen(false);
                                                }}
                                            >
                                                YES
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>

                <Transition appear show={isLocationOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="relative z-10"
                        onClose={() => setIsLocationOpen(false)}
                    >
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <div className="fixed inset-0 bg-black bg-opacity-25" />
                        </Transition.Child>

                        <div className="fixed inset-0 overflow-y-auto">
                            <div className="flex min-h-full items-center justify-center p-4 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-sky-50 p-6 text-center align-middle font-sans shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="bold text-lg font-bold leading-6 text-slate-900"
                                        >
                                            Are you sure you want to add a
                                            location?
                                        </Dialog.Title>
                                        <div className="mt-4 flex items-center justify-center gap-4">
                                            <button
                                                type="button"
                                                className="rounded-lg bg-red-600 bg-opacity-30 px-4 py-1 hover:bg-opacity-60"
                                                onClick={() =>
                                                    setIsLocationOpen(false)
                                                }
                                            >
                                                NO
                                            </button>
                                            <button
                                                type="button"
                                                className="rounded-lg bg-sky-600 bg-opacity-30 px-4 py-1 hover:bg-opacity-60"
                                                onClick={() => {
                                                    createLocation();
                                                    setIsLocationOpen(false);
                                                }}
                                            >
                                                YES
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
            </div>
        </div>
    );
}

export default Settings;
