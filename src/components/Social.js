
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import {CgFacebook, CgSearch} from 'react-icons/cg';

import React, { Components } from 'react';


const Social= () =>{
    return (
        <div className="flex justify-between py-7 px-14 items-center border-b border-gray-200">
            <div className="cursor-pointer flex">
                <div className="h-10 w-10 mr-2 bg-white rounded-full border border-gray-200 flex justify-center items-center hover:bg-indigo-400 transition ease-in duration-300 hover:text-white">
                    <CgFacebook className="h-4 w-4"/>
                </div>
                <div className="h-10 w-10 mr-2 bg-white rounded-full border border-gray-200 flex justify-center items-center hover:bg-indigo-400 transition ease-in duration-300 hover:text-white">
                    <FaTwitter className="h-4 w-4"/>
                </div>
                <div className="h-10 w-10 mr-2 bg-white rounded-full border border-gray-200 flex justify-center items-center hover:bg-indigo-400 transition ease-in duration-300 hover:text-white">
                    <FaInstagram className="h-4 w-4"/>
                </div>
            </div>
            <div>
                <a href="#" className="uppercase text-base font-bold text-xl">
                    Publishing 
                    <span className="text-red-500"> Company</span>
                    <small className="block text-gray-500 text-xs text-center tracking-widest">book publishing company</small>
                </a>
            </div>
            <div className="flex">
                <input type="text" className="border-black" />
                <div className="bg-indigo-400 h-12 w-14 flex justify-center items-center text-white border rounded-r-full cursor-pointer">
                    <CgSearch className="h-5 w-5"/>
                </div>
            </div>
        </div>
    )
}

export default Social