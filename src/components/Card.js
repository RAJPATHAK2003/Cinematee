
import { Link } from 'react-router-dom'
 export const Card = ({movie}) => {
  
  return (
    <div className='flex flex-wrap justify-start mt-4'>
      <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        <Link to={`/movie/:${movie.id}`}>
            <img className="rounded-t-lg" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
        </Link>
        <div className="p-5">
            <Link to="/movie/:id">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{movie.original_title}</h5>
            </Link>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{movie.overview}</p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Popularity={movie.popularity}</p>
           
        </div>
        
    </div>

   

   
    </div>
  )
}


