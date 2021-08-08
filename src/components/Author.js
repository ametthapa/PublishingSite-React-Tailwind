const Author = () =>{
    return (
        <div className="grid grid-cols-2 px-20">
            <div>
                <img src="./images/5.jpg" alt="girl" className="w-full h-author" />
            </div>
            <div className="pt-16 px-10">
                <p className="uppercase text-red-500 tracking-widest">Welcome To Publishing Company</p>
                <p className="text-5xl font-semibold text-gray-700 py-2 leading-normal">Publishing Company Created By Authors</p>
                <p className="pb-5 text-gray-500 leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                <p className="pb-5 text-gray-500 leading-7">
                On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country.</p>
                <button className="font-semibold bg-primary py-2 px-4 rounded-md text-white shadow-md">View All Our Authors</button>
            </div>
        </div>
    )
}

export default Author