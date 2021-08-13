import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

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
  const menuBarList = () => {
    const menubar = document.getElementById("menubarToggle");
    console.log(menubar);
  };

  return (
    <div>
      <div
        id="menuBarToggle"
        className="md:hidden bg-black h-10 text-gray-400 flex items-center P-4 pl-10 cursor-pointer"
        onClick={menuBarList}
      >
        <CgMenu className="h-6 w-6" />
        MENU
      </div>
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
  );
};

export default Menubar;
