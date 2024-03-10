import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { DiDrupal } from "react-icons/di";
import { ImCross } from "react-icons/im";
import Main2 from './Main2.jsx';
const Navbar=()=>{
    // for dropdown
    const [dropDown, setDropDown] = useState(false);
return (
<>
            <header className="bg-[#438181] ">
                <div className="max-w-4xl mx-auto flex justify-between items-center p-2">
                    <h1 className="hover:cursor-pointer text-center flex  justify-center items-center  font-bold border-black border-2 w-40 h-12 bg-[#D9D9D9] rounded-full" >
                        <DiDrupal className=" w-9 h-9 inline" /> Compresser
                    </h1>

                    <nav className="space-x-3 hidden md:block">
                        <a href="/" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:rounded-xl">Home</a>
                        <a href="/image_cropper" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:p-2 rounded-xl">Image Cropper</a>
                        <a href="" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:p-2 rounded-xl">Go Premium</a>
                        <a href="" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:p-2 rounded-xl">How To</a>
                    </nav>
                    {dropDown ? <ImCross className='w-10 h-8 md:hidden' onClick={() => { setDropDown(!dropDown) }} /> : <GiHamburgerMenu className='w-10 h-10 md:hidden' onClick={() => { setDropDown(!dropDown) }} />}
                </div>
            </header>
            {dropDown ?

                <nav className="flex flex-col justify-center align-top top-16 right-0 absolute">
                    <a href="/" className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Home</a>
                    <a href="/image_cropper" className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Image Cropper</a>
                    <a href="" className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Go Premium</a>
                    <a href="" className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">How To</a>
                </nav>
                : null
            }

</>
);

}
export default Navbar;

