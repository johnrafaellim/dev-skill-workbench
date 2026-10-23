import Input from "../components/ui/Input.jsx";
import Button from "../components/ui/Button.jsx";
import {useForm} from "react-hook-form";

function Login() {
    const { register, handleSubmit } = useForm();

    function handleData(data){
        console.log(data)
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
