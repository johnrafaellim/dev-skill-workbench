function Input({type, label, placeholder, register}) {
    return (
        <div className="flex flex-col gap-2 my-2">
            <label htmlFor={label} className="text-base capitalize font-semibold">{label}</label>
            <input {...register(label)} type={type} placeholder={placeholder} className="border border-gray-200 px-4 py-2 rounded" />
        </div>
    )
}

export default Input
