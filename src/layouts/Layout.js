import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Layout() {
    let border = true;

    return (
        <div className="min-h-full font-sans">
            <Navbar />
            <Header border />
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
