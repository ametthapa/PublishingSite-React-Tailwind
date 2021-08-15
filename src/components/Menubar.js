import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";
import { useState } from "react";

const MenuItems = [
  {
    title: "About",
  },
  {
    title: "coming soon",
  },
  {
    title: "top seller",
  },
  {
    title: "books",
  },
  {
    title: "author",
  },
  {
    title: "blog",
  },
  {
    title: "contact",
  },
];

const Menubar = () => {
  const [show, setShow] = useState(false);

  const ToggleSwitch = () => {
    show ? setShow(false) : setShow(true);
  };

  return (
    <>
      {/* Desktop View */}

      <div className="hidden md:block">
        <nav className="tracking-widest font-semibold md:block md:bg-white bg-black text-gray-500 ">
          <ul className="flex justify-center uppercase flex-col md:flex-row">
            <li className="px-5 md:py-8 py-2 px-3 md:text-indigo-500 text-gray-100 border-b-2 hover:border-primary transition ease-in duration-500 opacity-50 ">
              <Link to="/">Home</Link>
            </li>
            {MenuItems.map((items) => {
              return (
                <li className="md:px-5 md:py-8 border-b-2 hover:border-primary px-3 py-2">
                  <Link to={items.title}>{items.title}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile VIew */}
      <div className="md:hidden">
        <div
          className="bg-black h-10 text-gray-400 flex items-center p-6 pl-10 cursor-pointer"
          onClick={ToggleSwitch}
        >
          <CgMenu className="h-6 w-6 mr-2" />
          MENU
        </div>
        {show ? (
          <nav className="tracking-widest font-semibold md:block md:bg-white bg-black text-gray-500 ">
            <ul className="flex justify-center uppercase flex-col md:flex-row">
              <li className="px-5 md:py-8 py-2 px-3 md:text-indigo-500 text-gray-100 border-b-2 hover:border-primary transition ease-in duration-500 opacity-50 ">
                <Link to="/">Home</Link>
              </li>
              {MenuItems.map((items) => {
                return (
                  <li className="md:px-5 md:py-8 border-b-2 hover:border-primary px-3 py-2">
                    <Link to={items.title}>{items.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        ) : null}
      </div>
    </>
  );
};

export default Menubar;
