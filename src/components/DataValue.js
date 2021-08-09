const Datas = [{
    number:'75,678',
    title: 'Active Readers',
}, {
    number:'3,040',
    title: 'Total Pages',
}, {
    number:'283',
    title: 'Cup Of Coffee',
}, {
    number:'14,500',
    title: 'Facebook Fans',
}, 


]
const DataValue = () =>{
    return (
        <div className="grid grid-cols-4 px-20 pt-5 pb-10 text-center bg-gray-200">
            {
                Datas.map((data) => {
                    return (
                        <div>
                            <p className="font-semibold text-6xl p-5">{data.number}</p> 
                            <small className="uppercase opacity-50 text-md tracking-wide mt-5">{data.title}</small>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DataValue