import { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = ({ login }) => {

    const [username, setUser] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className='flex justify-center'>
            <div className='w-[400px] p-[15px] mt-[90px] rounded-md shadow-sm border-2'>
                <h1 className='text-center text-[25px] text-[#3D1CE3] font-[600]'>Login</h1>
                <div className='py-[5px] my-[5px]'>
                    <label className='text-[#3116B6] text-[17px]'
                        htmlFor="">Username</label>
                    <input
                        className='form-control'
                        placeholder='Username'
                        onChange={(event) => {
                            setUser(event.target.value)
                        }}
                        type="text" />
                </div>


                <div className='py-[5px] my-[5px]'>
                    <label className='text-[#3116B6] text-[17px]'
                        htmlFor="">Password</label>
                    <input
                        className='form-control'
                        placeholder='Password'
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                        type="password" />
                </div>

                <div className='text-center my-2'>
                    <button
                        className='btn btn-success'
                        onClick={() => { login(username, password) }}
                    >Login</button>
                </div>
                <hr />
                <div className='text-[#3116B6] text-center mt-[10px]'>Don&lsquo;t Have an account?</div>
                <div className='text-center my-2'>
                    <Link to='/signup' className='btn btn-primary' >Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
