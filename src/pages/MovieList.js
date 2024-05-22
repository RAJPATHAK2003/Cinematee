import React, { useEffect } from 'react'
import { Card } from '../components'
import { useState } from 'react'

 export const MovieList = ({apiPath}) => {
const [movies,setMovies]=useState([]);
useEffect(()=>{
  async function fetchMovie(){
    const response=await fetch(`https://api.themoviedb.org/3/${apiPath}?api_key=0c9cb8d35c68fd966530d22a78760371`);
    const data=await response.json();
    setMovies(data.results);
  }
  fetchMovie();

})

  return (
    <main>
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