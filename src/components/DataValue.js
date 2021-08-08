const DataValue = () =>{
    return (
        <div className="grid grid-cols-4 px-20 pt-5 pb-10 text-center bg-gray-200">
            <div><p className="font-semibold text-6xl p-5">75,678</p> 
                <small className="uppercase opacity-50 text-md tracking-wide mt-5">Active Readers</small>
            </div>
            <div><p className="font-semibold text-6xl p-5">3,040</p>
                <small className="uppercase opacity-50 text-md tracking-wide mt-5">Total Pages</small>
            </div>
            <div><p className="font-semibold text-6xl p-5">283</p>
                <small className="uppercase opacity-50 text-md tracking-wide mt-5">Cup Of Coffee</small>
            </div>
            <div><p className="font-semibold text-6xl p-5">14,500</p>
                <small className="uppercase opacity-50 text-md tracking-wide mt-5">Facebook Fans</small>
            </div>
        </div>
    )
}

export default DataValue