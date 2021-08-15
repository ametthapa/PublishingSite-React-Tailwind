import { FaTwitter, FaInstagram } from "react-icons/fa";
import { CgFacebook, CgSearch } from "react-icons/cg";

import { Link } from "react-router-dom";

const Icons = [
  {
    title: CgFacebook,
  },
  {
    title: FaInstagram,
  },
  {
    title: FaTwitter,
  },
];

const Social = () => {
  return (
    <div className="flex md:flex-row md:justify-between py-7 lg:px-14 md:px-5 md:items-center border-b border-gray-200 flex-col items-center">
      <div className="flex pb-6 md:p-0">
        {Icons.map((icons) => {
          return (
            <div className="cursor-pointer h-10 w-10 mr-2 bg-white rounded-full border border-gray-200 flex justify-center items-center hover:bg-primary transition ease-in duration-300 hover:text-white">
              <icons.title className="h-4 w-4" />
            </div>
          );
        })}
      </div>
      <div className="lg:p-0 pb-6">
        <Link
          to="/"
          className="uppercase text-base font-bold md:text-xl sm:text-3xl"
        >
          Publishing
          <span className="text-red-500"> Company</span>
          <small className="block text-gray-400 md:text-xs text-center tracking-widest sm:text-xl ">
            book publishing company
          </small>
        </Link>
      </div>
      <div className="flex sm:w-full sm:justify-center md:w-auto md:px-0 px-10">
        <input
          type="text"
          className="border border-gray-100 bg-gray-100 rounded-l-full placeholder-gray-500 focus:outline-none p-4 h-12 md:w-auto w-full"
          placeholder="Search"
        />
        <div className="bg-primary h-12 w-14 flex justify-center items-center text-white border rounded-r-full cursor-pointer">
          <CgSearch className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Social;
