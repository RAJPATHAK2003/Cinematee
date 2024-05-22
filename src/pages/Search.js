import React from 'react'
import { useEffect } from 'react'
import { Card } from '../components'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

 export const Search = ({apiPath}) => {
  const [movies,setMovies]=useState([]);
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");
  useEffect(()=>{
    async function fetchMovie(){
      const response= await fetch(`https://api.themoviedb.org/3/${apiPath}?api_key=0c9cb8d35c68fd966530d22a78760371&query=${queryTerm}`);
      const data=await response.json();
      setMovies(data.results);
    }
    fetchMovie();  
  })

  return (
    <main>
      <section>
        <p>{ movies.length === 0 ? `No result found for ${queryTerm}` : `Result are` }</p>
      </section>
    <section className='max-w-7xl mx-auto'>
      <div className='flex flex-wrap justify-start'>
       {movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
       ))}
         
      </div>
    </section>
  </main>
  )
}


