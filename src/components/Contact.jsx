import { FaPhone } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Names = [{
    name:'Name',
},{
    name:'E-mail',
},{
    name:'Phone',
}

]


const Contact= () =>{
    return(
        <div className="pt-5 pb-20 px-20">
            <p className="font-semibold text-3xl border-b-2 pb-4">We'd love to hear from you. </p>
            <div className="pt-4 grid grid-cols-3">
                <div className="col-span-2">
                    <form>
                        {Names.map((name) =>{
                            return (
                                <div className="p-2">
                            <label className="font-semibold mb-3 block">{name.name} <span className="text-red-500">*</span></label>
                            <input type="text" className="border border-gray-100 bg-gray-100 placeholder-gray-500 focus:outline-none p-4 h-9 w-3/4" placeholder={`Enter your ${name.name}`} />
                        </div>
                            )
                        })}
                        <div className="p-2">
                            <label className="font-bold mb-3 block">Message <span className="text-red-500">*</span></label>
                            <textarea className="border border-gray-100 bg-gray-100 placeholder-gray-500 focus:outline-none p-4 w-3/4" placeholder="Enter Your Message here" />
                        </div>
                    </form>
                </div>
                <div className="col-span-1">
                    <div className="pb-8">
                        <p className="text-xl text-semibold p-4">Postal Address</p>
                        <div className="border-l-4 border-primary py-3 pl-4">
                            <p>Sunaulo Shopping Pvt. Ltd.</p>
                            <p>Butwal-11, BUtwal Sub-Metropolitan</p>
                            <p>Rupandehi</p>
                            <p>Nepal</p>
                        </div>
                    </div>
                    <div className="">
                        <p className="text-xl text-semibold p-4">For More Enquires</p>
                        <div className="border-l-4 border-primary py-3 pl-4 mb-6">
                           <p><FaPhone className="inline-block text-primary mr-1" /> <span className="text-sm">Call : +977-071-541144</span></p>
                           <p><MdEmail className="inline-block text-primary mr-1" /> <span className="text-sm">Email :info@sunauloshopping.com.np</span></p>
                        </div>

                        <div className="border-l-4 border-primary py-3 pl-4">
                           <p>For Website Related Queries</p>
                           <p><MdEmail className="inline-block text-primary mr-1" /> <span className="text-sm">Email :admin@sunauloshopping.com.np</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact