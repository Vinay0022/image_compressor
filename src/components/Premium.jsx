
import { useState } from 'react';
import { useRef } from 'react';

function Premium(){
return (

<>
<div className='h-screen'>
	<section className='flex justify-center items-center'>
	<h1 className='text-4xl mt-2 font-bold'>Compare the plans and pricing.</h1>
	</section>


	<div className='h-3/6 flex flex-col justify-center  items-center '>

	<section className='mt-14 border-black border-4 rounded-lg w-1/5 flex justify-center items-center '>
	<div className='text-2xl font-medium'>
	Most popular
	</div>
	</section>

	<button onClick={()=>{}} className='  text-4xl text-center  pt-10 pb-10 font-bold block border-black border-2 w-1/5 rounded-lg'>
Buy at ₹300
	</button>

	</div>
</div>

</>

)

}
export default Premium;
