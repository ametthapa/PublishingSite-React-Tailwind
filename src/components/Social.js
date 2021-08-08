
 import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Social = () =>{
    return (
        <div className="flex justify-between py-7 px-10 items-center">
            <div className="cursor-pointer flex">
                <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:bg-blue-200">
                    <FaFacebookF className="h-5 w-5"/>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:bg-blue-200">
                    <FaTwitter className="h-5 w-5"/>
                </div>
                <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center hover:bg-blue-200">
                    <FaInstagram className="h-5 w-5"/>
                </div>
            </div>
            <div>
                <a href="#">
                    Publishing 
                    <span>Company</span>
                    <small>book publishing company</small>
                </a>
            </div>
            <div>
                <input type="text" className="border-red-700" />
                <p>This iis shit</p>
            </div>
        </div>
    )
}

export default Social