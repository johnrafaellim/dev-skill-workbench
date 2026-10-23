import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {useForm} from "react-hook-form";
import {useContext} from "react";
import {AuthStore} from "../context/AuthContext.jsx";
import {useNavigate} from "react-router-dom";

function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const { login } = useContext(AuthStore);

    function handleData(data){
        login(data)
        navigate('/');
    }

    return (
        <div className="max-w-lg h-screen mx-auto flex flex-col justify-center gap-2">
            <h1 className="text-2xl font-bold">Login</h1>
            <p className="text-base">Welcome back User</p>
            <form onSubmit={handleSubmit(handleData)}>
                <Input type="email" label="email" placeholder="Enter your email" register={register} />
                <Input type="password" label="password" placeholder="Enter your password" register={register} />
                <Button />
            </form>
        </div>
    )
}

export default Login
