import { FaTwitter, FaInstagram, FaMap, FaPhone, FaTelegramPlane } from 'react-icons/fa';
import {CgFacebook} from 'react-icons/cg';

import {IoMdArrowDropright} from 'react-icons/io'

const Icons = [{
    title : CgFacebook,
},{
    title : FaInstagram,
},{
    title : FaTwitter,
}
]
const DetailLinks = [ {
    title: 'External Links',
    one:'Affilate Program',
    two: 'Business Services',
    three: 'Education Services',
    four: 'Gift Cards',
}, {
    title: 'Legal',
    one: 'Join Us',
    two: 'Blog',
    three: 'Privacy & Policy',
    four: 'Terms & Condition',
}, {
    title: 'Company',
    one: 'About Us',
    two: 'Blog',
    three: 'Contact Us',
    four: 'Careers',
},
]

const Footer = () =>{
    return (
        <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-y-14 py-20 sm:px-20 px-10 bg-footer text-white">
            <div>
            <p className="font-bold text-xl pb-8">Connect</p>
            <span className="">
                Far far away, behind the word mountains, far from the countries.
            </span>
            <div className="flex pt-8">
                {Icons.map((icons) => {
                return (
                    <div className="cursor-pointer h-12 w-12 mr-2 bg-primary rounded-full flex justify-center items-center ">
                        <icons.title className="h-5 w-5" />
                    </div>
                );
                })}
            </div>
            </div>
            {DetailLinks.map((links) => {
            return (
                <div>
                    <p className="font-bold text-xl pb-8">{links.title}</p>
                    <ul>
                        <li className="pb-3 text-lg"><IoMdArrowDropright className="inline-block h-6 w-6"/><a href="#">{links.one}</a></li>
                        <li className="pb-3 text-lg"><IoMdArrowDropright className="inline-block h-6 w-6"/><a href="#">{links.two}</a></li>
                        <li className="pb-3 text-lg"><IoMdArrowDropright className="inline-block h-6 w-6"/><a href="#">{links.three}</a></li>
                        <li className="pb-3 text-lg"><IoMdArrowDropright className="inline-block h-6 w-6"/><a href="#">{links.four}</a></li>
                    </ul>
                </div>
            );
            })}
            <div>
                <header className="font-bold text-xl pb-8">Have a Questions?</header>
                <div className="flex pb-4">
                    <FaMap className="inline-block h-8 w-8"/>
                    <span className="pl-4">203 Fake St. Mountain View, San Francisco, California, US</span>
                </div>
                <div className="flex pb-4 items-center">
                    <FaPhone className="inline-block h-4 w-4"/>
                    <span className="pl-4">+2 392 3929 210</span>
                </div>
                <div className="flex pb-4 items-center">
                    <FaTelegramPlane className="inline-block h-4 w-4"/>
                    <span className="pl-4">info@yourdomain.com</span>    
                </div>
            </div>
        </div>
    );
}

export default Footer