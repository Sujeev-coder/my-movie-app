import React from 'react'

const Movie = ({ data }) => {
    return (
        <>
            <div className='grid grid-cols-5 '>

                {data.map(movie =>

                    <div class="max-w-lg rounded overflow-hidden shadow-lg container mx-auto py-6 m-2">
                        <div class="flex flex-wrap m-3  ">

                            
                            < img class="w-full " src = { movie.Poster } alt = "Card image" />
                            <div class="px-6 py-4">
                                <div class="font-bold text-xl mb-2">{movie.Title}</div>

                            </div>
                            <div class="px-6 py-4">
                             <h2 className='text-2xl text-black'><b>Released year :</b>{movie.Year}</h2>
                            </div>
                            </div>

                        </div>

                )}



            </div>


        </>
    )
}

export default Movie



  