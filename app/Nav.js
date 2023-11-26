
"use client"
import React, { useState } from 'react'
import Movie from './Movie'


const Nav = () => {

    const [search, setsearch] = useState("")
    const [data, setdata] = useState([])

    const sumbitHandler = e => {

        e.preventDefault();

        fetch(`http://www.omdbapi.com/?s=${search}&apikey=263d22d8`).then(response => response.json()).then(data => {
            setdata(data.Search)
           console.log(data.Search)
        })

    }

    return (
        <>

            <div className='bg-black p-5 flex justify-around text-white'>

                <div className='text-2xl flex gap-8'>
                    <a href=''>Home</a>
                    <a href=''>Top10</a>
                    <a href=''>About</a>
                    <a href=''>Contact</a>
                </div>

                <div>

                    <form onSubmit={sumbitHandler}>


                        <input className='text-center capitalize text-black' type='text' placeholder='search any movie' value={search} onChange={(e) => setsearch(e.target.value)} />
                        <input className='ml-3 bg-yellow-100 text-black rounded p-1' type='submit' value="serach" />

                    </form>


                </div>

                <div className='flex  gap-8'>

                    <h2>Icons</h2>
                    <h2>Icons</h2>
                </div>


            </div>

            <div>{data.length >= 1 ? <Movie data={data} /> :<center className='m-5'> <h2 className='text-xl'>No Data Found</h2></center>}</div>

        </>


    )
}

export default Nav