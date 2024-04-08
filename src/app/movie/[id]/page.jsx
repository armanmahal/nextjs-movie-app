import React from 'react'

export default async function MoviePage({params}) {
    const movieId = params.id;

    const res = await fetch (`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`)

    const movie = await res.json();

  return (
    <div className='flex justify-center items-center mt-2'>
        <div className='max-w-5xl px-5'>
        
        <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}`} alt="movie" 
        className='border-2 border-gray-500 rounded-lg shadow-lg shadow-gray-500'
        />

        <h2 className='md:text-4xl text-2xl md:font-bold font-semibold my-4 px-2'>{movie.title || movie.name}</h2>
        
        <p className='px-2'>{movie.overview}</p>

        <p className='my-4 text-gray-500 px-2'>date released: {movie.release_date || movie.first_air_date}</p>

        <p className='text-gray-500 mb-10 px-2'>Rating: {movie.vote_count}</p>

    </div>
    </div>
    
  )
}
