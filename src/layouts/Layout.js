import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import { useEffect, useState } from "react";

const headers = ["Dashboard", "Logs", "Settings"];

function Layout() {
    const border = true;
    const [header, setHeader] = useState("");
    const location = useLocation();

    useEffect(() => {
        switch (location.pathname) {
            case "/":
                setHeader(headers[0]);
                break;
            case "/logs":
                setHeader(headers[1]);
                break;
            case "/settings":
                setHeader(headers[2]);
                break;
            default:
        }
    }, [location.pathname]);

    return (
        <div className="min-h-full font-sans">
            <Navbar />
            <Header border={border} value={header} />
            <main
                className={
                    (border ? "border-b border-sky-700 xl:border-x" : "") +
                    " mx-auto max-w-7xl bg-slate-800"
                }
            >
                <Outlet />
            </main>
        </div>
    );
}

export default Layout;
