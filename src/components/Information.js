import { GiUnicorn, GiRomanToga, GiArtificialIntelligence, GiHistogram } from "react-icons/gi";

const Information = () =>{
    return (
        <div className="grid grid-cols-4 pt-10 px-16 pb-20">
            <div className="text-center flex justfy-center items-center flex-col group">
                <div className="h-36 w-36 bg-gray-200 rounded-full flex justify-center items-center hover:bg-primary hover:text-white group-hover:bg-primary">
                    <GiUnicorn className="h-16 w-16"/>
                    <div></div>
                </div>
                <p className="py-5 font-semibold text-2xl">Children's Book</p>
                <p className="text-gray-600 leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="text-center flex justfy-center items-center flex-col">
                <div className="h-36 w-36 bg-gray-200 rounded-full flex justify-center items-center hover:bg-primary hover:text-white relative">
                    <GiRomanToga className="h-16 w-16"/>
                    <div className="h-10 w-10 bg-red-500 rounded-full absolute opacity-75 hover:bg-white"></div>
                </div>
                <p className="py-5 font-semibold text-2xl">Romance</p>
                <p className="text-gray-600 leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="text-center flex justfy-center items-center flex-col">
                <div className="h-36 w-36 bg-gray-300 rounded-full flex justify-center items-center hover:bg-primary hover:text-white">
                    <GiArtificialIntelligence className="h-16 w-16"/>
                    <div></div>
                </div>
                <p className="py-5 font-semibold text-2xl">Art & Architecture</p>
                <p className="text-gray-600 leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <div className="text-center flex justfy-center items-center flex-col">
                <div className="h-36 w-36 bg-gray-300 rounded-full flex justify-center items-center hover:bg-primary hover:text-white">
                    <GiHistogram className="h-16 w-16"/>
                    <div></div>
                </div>
                <p className="py-5 font-semibold text-2xl">History</p>
                <p className="text-gray-600 leading-7">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
    
        </div>
    )
}

export default Information