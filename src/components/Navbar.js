import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
    { name: "Dashboard", to: "/", current: true },
    { name: "Logs", to: "/logs", current: false },
];
const userNavigation = [
    { name: "Settings", to: "/logs" },
    { name: "Sign Out", to: "/" },
];

function Navbar() {
    const [current, setCurrent] = useState("/");
    const location = useLocation();

    useEffect(() => {
        for (let item of navigation) {
            if (item.to === location.pathname) {
                item.current = true;
                setCurrent(location.pathname); // does nothing currently but re-renders the virtual DOM after useEffect runs which updates the nav links
            } else {
                item.current = false;
            }
        }
    }, [location]);

    return (
        <Disclosure as="nav" className="border-b border-b-sky-700">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img src="./images/pizza.png" alt="Logo" />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-5 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className={
                                                    (item.current ||
                                                    item.to === current
                                                        ? "bg-slate-900 text-slate-200"
                                                        : "text-slate-400 hover:bg-slate-700 hover:text-slate-50") +
                                                    " text-md rounded-md px-3 py-2 font-medium"
                                                }
                                                aria-current={
                                                    item.current
                                                        ? "page"
                                                        : undefined
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-4 flex items-center md:ml-6">
                                    <Menu as="div" className="relative ml-3">
                                        <div>
                                            <Menu.Button
                                                type="button"
                                                className="flex max-w-xs items-center rounded-full focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 focus:ring-offset-slate-800"
                                                id="menu-button"
                                                aria-expanded="false"
                                                aria-haspopup="true"
                                            >
                                                <span className="sr-only">
                                                    Open menu
                                                </span>
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="./images/echigo-square.jpg"
                                                    alt="User"
                                                />
                                            </Menu.Button>
                                        </div>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="transform opacity-0 scale-95"
                                            enterTo="transform opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="transform opacity-100 scale-100"
                                            leaveTo="transform opacity-0 scale-95"
                                        >
                                            <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-slate-500 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                {userNavigation.map((item) => (
                                                    <Menu.Item key={item.name}>
                                                        {({ active }) => (
                                                            <Link
                                                                to={item.to}
                                                                className={
                                                                    (active
                                                                        ? "bg-slate-600"
                                                                        : "") +
                                                                    " block px-4 py-2 text-sm text-slate-100"
                                                                }
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </Menu.Item>
                                                ))}
                                            </Menu.Items>
                                        </Transition>
                                    </Menu>
                                </div>
                            </div>
                            <div className="-mr-2 flex md:hidden">
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-slate-800 p-2 text-slate-400 hover:bg-slate-700 hover:text-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-800">
                                    <span className="sr-only">Open Menu</span>
                                    {open ? (
                                        <XIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    ) : (
                                        <MenuIcon
                                            className="block h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.to}
                                    className={
                                        (item.current
                                            ? "bg-slate-900 text-slate-200"
                                            : "text-slate-400 hover:bg-slate-700 hover:text-slate-50") +
                                        " block rounded-md px-3 py-2 text-base font-medium"
                                    }
                                    aria-current={
                                        item.current ? "page" : undefined
                                    }
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                        <div className="border-t border-t-slate-600 pt-4 pb-3">
                            <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                    <img
                                        className="h-10 w-10 rounded-full"
                                        src="./images/echigo-square.jpg"
                                        alt="user"
                                    />
                                </div>
                            </div>
                            <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.to}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-slate-400 hover:bg-slate-700 hover:text-slate-50"
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

export default Navbar;
