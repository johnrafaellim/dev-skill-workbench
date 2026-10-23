import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className="flex justify-between items-center p-4">
            <Link to="/"><h1 className="text-base font-bold">EXPENSE TRACKER</h1></Link>
            <Link to="/login" className="text-white text-sm font-semibold bg-orange-500 px-4 py-2 rounded">Login</Link>
        </header>
    )
}

export default Header
