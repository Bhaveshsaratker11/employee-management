import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        console.log("email is ", email);
        console.log("password is ", password);

        setEmail("");
        setPassword("")

    }


    return (
        <div className='w-screen h-screen bg-indigo-200'>

            <div className=' flex w-screen h-screen items-center justify-center'>

                <form onSubmit={(e) => {
                    submitHandler(e)
                }} className=' bg-white flex gap-5 flex-col px-5 py-8 rounded-2xl  sm:py-25 sm:px-15 lg:py-25  lg:px-25'>
                    <h1 className=' sm:text-3xl text-2xl text-cyan-600 font-medium text-center '>Login page</h1>
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }
                        }
                        className=' border-2 border-cyan-300 text-center bg-cyan-100 rounded-xl py-3' type='text' placeholder='enter your email'></input>

                    <input value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }
                        } className=' border-2 border-cyan-300 bg-cyan-100 text-center px-8 lg:px-15 py-3 rounded-xl' type='password' placeholder='enter password'></input>
                    <button className='bg-blue-400 mx-15 p-2 rounded-2xl active:scale-95' type='submit'>log in</button>
                </form>
            </div>
        </div>
    )
}

export default Login
