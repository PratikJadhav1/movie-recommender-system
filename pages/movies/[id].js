import React from 'react'
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery from "../../lib/api"
import getRMovie from '../../lib/movies'

export default function movie(props) {
    const movies = getRMovie()
    return (
        <MovieBoxC data={props.movies} rmovies={movies}/>
    )
}

export async function getServerSideProps({params}) {
    const res = await getDataByQuery(params.id)
    return {
        props: {
            movies: res,
        }
    }
}
