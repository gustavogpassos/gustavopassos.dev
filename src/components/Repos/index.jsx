// import { useState, useEffect } from 'react'
// import axios from 'axios'
import { repos } from '../../assets/repos'
// const apiKey = import.meta.env.VITE_GITHUB_API_KEY

export default function Repos() {

    // const [repos, setRepos] = useState([])

    // useEffect(() => {
    //     axios.get('https://api.github.com/users/gustavogpassos/repos', {
    //         headers: {
    //             Authorization: `Bearer ${apiKey}`
    //         }
    //     })
    //         .then(response => {
    //             console.log(response.data)
    //             setRepos(response.data)
    //         })
    // }, [])
    // let count = 0
    return (
        <>
            <div className='grid grid-cols-9 justify-center'>
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
        </>
    )
}