import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom';
 export const MovieDetail = () => {
  const params = useParams();
  const [movies, setMovie] = useState({});
  const image=`https://image.tmdb.org/t/p/original/${movies.poster_path}`;


  useEffect(() => {
    fetchMovie();
  },[])
  const fetchMovie = async ()=>{
    const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id.slice(1)}?api_key=0c9cb8d35c68fd966530d22a78760371`);
    const data = await response.json();
setMovie(data);
  }
 
  return (
    <main>
       <section className='flex justify-around align-middle flex-wrap'>
       <div className='max-w-sm'>
        <img src={image}  className='border ' alt='images'/>
       </div>
       <div className='text-2xl max-w-2xl text-indigo-900'>
        <h1 className='font-bold text-4xl my-2'>Movie Name={movies.title}</h1>
        <span>
          <p className='font-bold'>OverView=</p>
          <p className=''>{movies.overview}</p>
        </span>
        <div>
        <div className="flex items-center my-3 mx-3">
              <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              <p className="ml-2 text-gray-900 dark:text-white">{movies.vote_average}</p>
              <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
              <span className="text-gray-900 dark:text-white">{movies.vote_count} reviews</span>
          </div>
          <div>
            <span className='flex my-2 '>
              <p className='font-bold'>Runtime:</p>
              <p className='mx-2'>{movies.runtime} min</p>
            </span>

            <span className='flex my-2 '>
              <p className='font-bold'>Budget:</p>
              <p className='mx-2'>{movies.budget}</p>
            </span>

            <span className='flex my-2 '>
              <p className='font-bold'>Revenue:</p>
              <p className='mx-2'>{movies.revenue}</p>
            </span>

            <span className='flex my-2 '>
              <p className='font-bold'>Release Date:</p>
              <p className='mx-2'>{movies.release_date}</p>
            </span>

            <p className="my-4">
            <span className="mr-2 font-bold">IMDB Code:</span>
            <a href={`https://www.imdb.com/title/${movies.imdb_id}`} className='text-orange-500'>{movies.imdb_id}</a>
          </p>
          </div>

        </div>
       </div>
       </section>
    </main>
  )
}


