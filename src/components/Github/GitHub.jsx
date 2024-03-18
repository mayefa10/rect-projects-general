import React from 'react'
import { useEffect } from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {

    const data = useLoaderData()

    // const [data, setData] = React.useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mayefa10')
    //     .then((response) => response.json())
    //     .then(data => {
    //         console.log(data)
    //         setData(data)
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} width={200} alt="" className='rounded-full p-4 my-2 mx-[83vh] bg-red-300 border-4' />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mayefa10')
    return response.json()
}