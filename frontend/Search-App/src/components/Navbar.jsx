import React, { useState } from 'react'
import abc from '../assets/logo.png'
import MainData from './MainData';




const Navbar = () => {

    const [que, setQue] = useState("");
    const [quantity, setQuantity] = useState(10);
    const [searchString, setSearchString] = useState("");
    const [updatedQue, setUpdatedQue] = useState();

    function printData() {
        setSearchString(que);
        setUpdatedQue(quantity);
    }

    return <div className=' w-full h-full ' >
        <div className=' w-full h-[15%] bg-gray-700 ' >
            <div className=' w-full h-full flex items-center bg-gray-700 gap-5 ' >
                <div className=' w-[30%] h-full flex items-center justify-center  ' >
                    <img src={abc} width='280px' alt="" className='  ' />
                </div>
                <div className=' w-[70%] h-full flex items-center  ' >
                    <div className=' w-[80%] h-full flex items-center justify-center  ml-[20px] gap-[10px] ' >

                        <input type="text" required placeholder='Search here!!' className=' h-[50px] w-[80%] border-2 border-white focus:outline-sky-500 rounded-full placeholder:text-[17px] pl-[10px] text-[17px] bg-white ' onChange={(e) => {
                            setQue(e.target.value);
                        }} />

                        <input type="number" required min="10"  defaultValue="10" placeholder='Quantity' className=' h-[50px] w-[100px] border-2 border-white focus:outline-sky-500 rounded-full placeholder:text-[17px] pl-[10px] pr-[10px] text-[17px] bg-white ' onChange={(e)=>{
                            setQuantity(e.target.value);
                        }} />

                        <button onClick={() => {
                            printData();
                        }} value="Search" className=' h-[50px] w-[100px] color-black rounded-full p-[5px] cursor-pointer text-center bg-amber-900 text-white text-[17px] hover:bg-amber-800 ' >Search</button>
                    </div>
                </div>
            </div>
        </div>
        <MainData que={searchString} quantity={updatedQue} />
    </div>
}

export default Navbar