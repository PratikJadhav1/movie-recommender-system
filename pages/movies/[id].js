import React from 'react'
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery, {getRMovies} from "../../lib/api"
import getRMovie from "../../lib/movies"

export default function movie(props) {
    const movies = getRMovie(true)
    // console.log(props.rmovies, "000")
    return (
        <MovieBoxC data={props.movies} rmovies={movies}/>
    )
}

export async function getServerSideProps({params}) {
    // const res = await getDataByQuery(params.id)
    const res = "null"
    const res2 = await getRMovies()
    return {
        props: {
            movies: res,
            rmovies: res2.data
        }
    }
}
