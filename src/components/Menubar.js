const Menubar = () =>{
    return (
        <div>
            <nav className="tracking-widest font-semibold">
                <ul className="flex justify-center uppercase ">
                    <li className="px-5 py-8 text-indigo-500 border-b-2 hover:border-primary transition ease-in duration-500 opacity-50"><a href="">Home</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">About</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">coming soon</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">top seller</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">books</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">author</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">blog</a></li>
                    <li className="px-5 py-8 border-b-2 hover:border-primary"><a href="">contact</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Menubar