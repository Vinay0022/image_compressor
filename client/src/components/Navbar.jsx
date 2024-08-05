import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { DiDrupal } from "react-icons/di";
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
const Navbar=({token, logout})=>{
    // for dropdown
    const [dropDown, setDropDown] = useState(false);


return (
<>
            <header className="bg-[#438181] ">
                <div className="max-w-4xl mx-auto flex justify-between items-center p-2">
                    <h1 className="hover:cursor-pointer text-center flex  justify-center items-center  font-bold border-black border-2 w-40 h-12 bg-[#D9D9D9] rounded-full" >
                        <DiDrupal className=" w-9 h-9 inline" />ToolBox 
                    </h1>

                    <nav className="space-x-3 hidden md:block">
                        <Link to="/" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:rounded-xl">Home</Link>
                        <Link to="/image_cropper" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:p-2 rounded-xl">Image Cropper</Link>
                        <Link to="/premium" className="text-black font-bold text-2xl p-2 hover:bg-[#D9D9D9] hover:p-2 rounded-xl">Go Premium</Link>

	{token ? <Link onClick={logout} to="/" className="text-black font-bold text-2xl p-2 hover:bg-[#d9d9d9] hover:p-2 rounded-xl">logout</Link>:
	<Link to="/login" className="text-black font-bold text-2xl p-2 hover:bg-[#d9d9d9] hover:p-2 rounded-xl">login</Link>
	
	}
                    </nav>
                    {dropDown ? <ImCross className='w-10 h-8 md:hidden' onClick={() => { setDropDown(!dropDown) }} /> : <GiHamburgerMenu className='w-10 h-10 md:hidden' onClick={() => { setDropDown(!dropDown) }} />}
                </div>
            </header>
            {dropDown ?

                <nav className="bg-[#D9D9D9] flex flex-col justify-center align-top top-16 right-0 absolute">
                    <Link to="/" onClick={()=>{setDropDown(!dropDown)}} className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Home</Link>
                    <Link to="/image_cropper" onClick={()=>{setDropDown(!dropDown)}} className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Image Cropper</Link>
                    <Link to="/premium"  onClick={()=>{setDropDown(!dropDown)}}className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Go Premium</Link>
		    {token ? <Link onClick={()=>{logout();setDropDown(!dropDown)}} to="/" className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Logout</Link>:
                    <Link to="/login" onClick={()=>{setDropDown(!dropDown)}} className="text-black font-bold text-xl p-1 hover:bg-[#D9D9D9] rounded-xl">Login</Link>
		    }
                </nav>
                : null
            }

</>
);

}
export default Navbar;

