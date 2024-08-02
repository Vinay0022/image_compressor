import { useState } from 'react';

function Login(){
	return (
		<>
		<div className='flex justify-center'>
		<div className='flex flex-col justify-center items-center mt-11 border-4 p-6 w-1/3 h-1/3'>
		<div className="border-4 border-[#d9d9d9] font-serif text-2xl font-extrabold w-1/3 text-center">Login</div>

		<form action='localhost:3000/login_user' className='flex flex-col'>
		<div>
		<label className='mr-5 mt-5'>Username</label>
		<input className='inline mt-5'></input>
		</div>
		<div>
		<label className='mr-6 mt-5'>Password</label>
		<input type='password' className='inline mt-5'></input>
		</div>
		<button className='bg-[#d9d9d9] text-center w-1/3 mt-5'>Login</button>
		</form>
		</div>
		</div>
		</>
	);

}

export default Login;
