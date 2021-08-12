import {Link} from 'react-router-dom'

const MenuItems = [{
    title:'About',
}, {
    title:'coming soon',
}, {
    title:'top seller',
},{
    title:'books',
},{
    title:'author',
},{
    title:'blog',
}, {
    title: 'contact',
}
]

const Menubar = () =>{
    return (
        <div>
            <nav className="tracking-widest font-semibold">
                <ul className="flex justify-center uppercase flex-col md:flex-row">
                    <li className="px-5 py-8 text-indigo-500 border-b-2 hover:border-primary transition ease-in duration-500 opacity-50"><Link to="/">Home</Link></li>
                    {
                        MenuItems.map((items) =>{
                            return (
                                <li className="px-5 py-8 border-b-2 hover:border-primary"><Link to={items.title}>{items.title}</Link></li>
                            )
                        } )
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menubar