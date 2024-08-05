import { useState } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){
const [usernameReg,setUsernameReg] = useState("");
const [passwordReg,setPasswordReg] = useState("");
	const navigate = useNavigate();

const register=()=>{
Axios.post("http://localhost:3000/register",{
	usernameReg: usernameReg,
	passwordReg: passwordReg,
}).then((response)=>{
navigate('/login');
});

}

	return (
		<>
		<div className='flex justify-center'>
		<div className='flex flex-col justify-center items-center mt-11 border-4 sm:p-6 p-3 sm:w-1/3 sm:h-1/3 '>
		<div className="border-4 border-[#d9d9d9] font-serif text-2xl font-extrabold sm:w-1/3 p-1 text-center">Register</div>

		<div className='flex flex-col'>
		<div>
		<label className='mr-5 mt-5'>Username</label>
		<input onChange={(e)=>{setUsernameReg(e.target.value)}} className='inline mt-5'></input>
		</div>
		<div>
		<label className='mr-6 mt-5'>Password</label>
		<input onChange={(e)=>{setPasswordReg(e.target.value)}} type='password' className='inline mt-5'></input>
		</div>
		<button onClick={register} className='bg-[#d9d9d9] text-center w-1/3 mt-5'>Register</button>
		</div>
		</div>
		</div>
		</>
	);

}

export default Register;
