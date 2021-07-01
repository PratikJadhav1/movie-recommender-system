import React from 'react'
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery, {getRMovies} from "../../lib/api"
import getRMovie, { getRIdMovie } from "../../lib/movies"

export default function movie(props) {
    var movies
    movies = getRMovie(false)
    // console.log(props.rmovies, "000")
    return (
        <MovieBoxC data={props.movies} rmovies={movies}/>
    )
}

export async function getServerSideProps({params}) {
    const idMovie = getRIdMovie()
    const res = await getDataByQuery(params.id)
    // const res = "null"
    // console.log("idmovie", idMovie)
    // const res2 = await getRMovies(idMovie)
    return {
        props: {
            movies: res,
        }
    }
}
