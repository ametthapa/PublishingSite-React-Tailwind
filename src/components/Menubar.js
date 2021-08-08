const Menubar = () =>{
    return (
        <div>
            <nav className="tracking-widest font-semibold">
                <ul className="flex justify-center uppercase ">
                    <li className="px-5 py-8 text-indigo-500 border-b-2 hover:border-indigo-400 transition ease-in duration-500 opacity-50"><a href="">Home</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">About</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">coming soon</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">top seller</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">books</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">author</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">blog</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-indigo-400"><a href="">contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menubar