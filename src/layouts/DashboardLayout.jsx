import {Link, Outlet} from "react-router-dom";
import Button from "../components/ui/Button.jsx";

function DashboardLayout() {
    return (
        <div className="flex w-full bg-zinc-200 min-h-screen">
            <aside className="w-1/4 p-8 bg-white flex flex-col gap-4 justify-between">
                <h1 className="text-base font-bold mb-8">EXPENSE TRACKER</h1>
                <nav className="flex flex-col gap-2 mb-auto">
                    <Link to="/dashboard" className="font-semibold">Overview</Link>
                    <Link to="add-expense" className="font-semibold">Add Expense</Link>
                </nav>
                <Button text="Logout"/>
            </aside>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout
