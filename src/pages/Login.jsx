import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";

function Login() {
    return (
        <div className="max-w-lg h-screen mx-auto flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-base">Welcome back User</p>
            <form>
                <Input type="email" label="email" placeholder="Enter your email"/>
                <Input type="password" label="password" placeholder="Enter your password"/>
                <Button />
            </form>
        </div>
    )
}

export default Login
