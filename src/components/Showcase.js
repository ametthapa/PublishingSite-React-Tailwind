const Showcase = () =>{
    return (
        <div className="relative">
            <img src="./images/3.jpg" alt="books" className="w-full h-showcase object-cover"/>
            <div className="absolute top-48 left-32 w-2/4">
                <p className="text-5xl font-bold tracking-wide">Good books don't give up all their secrets at once</p>
                <p className="py-8">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className="font-bold">
                    <button className="font-semibold bg-indigo-400 p-4 rounded-md text-white">View All Books</button>
                    <button className="font-semibold bg-white p-4 rounded-md">Explore new</button>
                </div>
            </div>
        </div>
    )
}

export default Showcase