import {Routes,Route} from "react-router-dom";
import { MovieDetail,MovieList,Search,PageNotFound } from "../pages";



 export const Allroutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing"/>}/>
        <Route path="/movie/:id" element={<MovieDetail />}/>
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular"/>}/>
        <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated"/>}/>
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming"/>}/>
        <Route path="/search" element={<Search apiPath="search/movie" />}/>
        <Route path="*" element={<PageNotFound/>}/>
        
    </Routes>
    </>
  )
}


