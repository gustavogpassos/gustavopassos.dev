
export default function Navbar(props) {
    return (
        <nav className='bg-gray-800 flex text-gray-100 py-5'>
            <div className="container mx-auto w-10/12 flex">
                <ul className="list-none w-fit">
                    {props.menu.map(item => {
                        return <li className="inline-block mr-8" key={item.name}><button>{item.name}</button></li>
                    })}
                </ul>
                <button className="text-gray-100 rounded ml-auto">Login</button>
            </div>
        </nav>
    )
}
