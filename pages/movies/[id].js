import React from 'react'
import {useRouter} from "next/router"
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery from "../../lib/api"
import getRMovie, {dataMovies} from '../../lib/movies'

export default function movie(props) {
    // const data = props.movies
    // console.log("ji", data)
    const moviess = dataMovies
    // console.log("movies", moviess)
    // const moviess = movies.slice(1, 5)
    // console.log(moviess)
    const rand = [...Array(5)].map(e=>Math.random()*40|0)
    const movies = rand.map(i => moviess[i])
    return (
        <MovieBoxC data={props.movies} rmovies={movies}/>
    )
}

export async function getServerSideProps({params}) {
    var res2
    // const res = await getDataByQuery(params.id)
    // res2.movies = "null"
    const res = "null" 
    return {
        props: {
            movies: res,
        }
    }
}
