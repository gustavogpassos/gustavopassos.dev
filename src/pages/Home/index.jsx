// import Banner from '../../components/Banner'
// import Footer from '../../components/Footer'
// import HomeCard from '../../components/HomeCard'
// import Navbar from '../../components/Navbar'
// import Repos from '../../components/Repos'
import { repos } from '../../assets/repos'
import './style.css'

function Home() {
    return (
        <div className='bg-gray-900 h-full text-gray-100'>
            <nav className='bg-gray-800 flex py-5'>
                <div className="container flex mx-auto">
                    <ul className="list-none w-fit">
                        <li className="inline-block mr-8"><button>Home</button></li>
                        <li className="inline-block mr-8"><button>About</button></li>
                        <li className="inline-block mr-8"><button>contact</button></li>
                    </ul>
                    <button className="text-gray-100 rounded ml-auto">Login</button>
                </div>
            </nav>
            <div className='container flex flex-col min-w-full'>
                <div className="container main mx-auto">
                    <div className="container flex min-h-screen p-auto m-auto min-w-max">
                        <div className="text-left w-full m-auto md:m-32 md:w-full">
                            <div className="max-w-md">
                                <h1 className="text-5xl font-bold">Hello there</h1>
                                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="w-full py-3 rounded mt-5 bg-blue-500 text-gray-100">Entre em contato</button>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mx-auto mb-10'>
                    <span className=''>Hello React</span>
                </div>
                <div className='container mx-auto grid grid-cols-9'>
                    {repos.map(repo => {

                        return (
                            <div className='col-span-3 min-w-20 bg-gray-100 shadow-lg p-3 align-middle flex flex-col rounded-md m-2 min-h-36' key={repo.id}>
                                <span className='text-xl mb-1 text-gray-900'>{repo.name}</span>
                                <hr />
                                <span className='mt-2 text-gray-700'>{repo.description}</span>
                                <a href={repo.html_url} target='_blank' className='bg-gray-700 text-gray-200 rounded p-2 w-fit mt-auto'>Ver projeto</a>
                            </div>
                        )

                    })}
                </div>
            </div>
            <footer className="bg-gray-800 text-gray-100 py-4 text-center">
                <div className="container mx-auto">
                    <p>&copy; 2023 My Website. All rights reserved.</p>
                </div>
            </footer>
        </div>
    )
}

export default Home