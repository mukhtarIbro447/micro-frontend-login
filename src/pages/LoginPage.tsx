import React, {useState} from 'react'

interface ResponseProps{
    userId: number,
    name:string
    username: string
}

const LoginPage = () => { 
    const [email, setEmail]= useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [data, setData] = useState<ResponseProps>()
    const [message, setMessage] = useState<string>()
    
    const handleSubmit = async () => {
        setMessage(undefined)
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    password,
                    username: email
                }),
            });
            response.json().then(res => {
                if (res.statusCode === 401 || res.statusCode === 404) {
                    setMessage(res.message)
                }else {
                   setData(res)
                }

            }).catch(e => {
                setMessage(e.message)
            });
        } catch (e) {
            setMessage(e.message)
        }
   
    }
    if (!!data) {

        return (
            <div className="bg-white relative flex flex-col justify-center min-h-screen overflow-hidden">
                <div className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
                    <div className="flex">
                        <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" /></svg></div>
                        <div>
                            <p className="font-bold">Hey {data.name}!</p>
                            <p className="text-sm">UserId Id: {data.userId}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    
    }

    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">

            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                {!!message && <h6 className="block text-sm font-semibold text-red-500">{message}</h6>}
            <h1 className="text-3xl font-semibold text-center text-black-600 ">
               Sign in
            </h1>
                <div className="mb-2">
                    <label
                        hmlFor="email"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} 
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <div className="mb-2">
                    <label
                        hmlFor="password"
                        className="block text-sm font-semibold text-gray-800"
                    >
                        Password
                    </label>
                    <input
                            type="password"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} 
                        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
                <a
                    href="#"
                    className="text-xs text-purple-600 hover:underline"
                >
                    Forget Password?
                </a>
                <div className="mt-6">
                    <button onClick={handleSubmit} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                        Login
                    </button>
                </div>
           
        </div>
    </div>
    );
}

export default LoginPage