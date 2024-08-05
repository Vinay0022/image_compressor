import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Login({setToken}){
const [username,setUsername] = useState("");
const [password,setPassword] = useState("");
	const [loginStatus,setLoginStatus] = useState("");
	const navigate = useNavigate();



const login =()=>{
Axios.post("http://localhost:3000/login",{
	username: username,
	password: password,
}).then((response)=>{
	const token = response.data.token;
	localStorage.setItem("token",token);
setToken(token);
	if(response.data.message){
setLoginStatus(response.data.message);
	}else{
navigate('/');
	}
});

}

	return (
		<>
		<div className='flex flex-col items-center justify-center '>
		<div className='flex flex-col justify-center items-center  mt-11 border-4 sm:p-6 p-3 sm:w-1/3 sm:h-1/3  '>
		<div className="border-4 border-[#d9d9d9] font-serif text-2xl  font-extrabold  sm:w-1/3 p-1 text-center">Login</div>

		<div className='flex flex-col'>
		<div>
		<label className='mr-5 mt-5'>Username</label>
		<input onChange={(e)=>{setUsername(e.target.value)}} className='inline mt-5'></input>
		</div>
		<div>
		<label className='mr-6 mt-5'>Password</label>
		<input onChange={(e)=>{setPassword(e.target.value)}} type='password' className='inline mt-5'></input>
		</div>
		<button onClick={login} className='bg-[#d9d9d9] text-center w-1/3 mt-5'>Login</button>
		<p className='mt-3'>Don&apos;t have an account?<Link to="/register" className='text-[#d9d9d9]' >Register</Link>.</p>
		</div>
		</div>
		<div className='text-2xl font-bold mt-4 font-serif'>{loginStatus}</div>
		</div>
		</>
	);

}

export default Login;
