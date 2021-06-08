import React from 'react'
import {useRouter} from "next/router"
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery from "../../lib/api"
import getRMovie from '../../lib/movies'

export default function movie(props) {
    // const data = props.movies
    // console.log("ji", data)
    return (
        <MovieBoxC data={props.movies} rmovies={props.rmovies}/>
    )
}

export async function getServerSideProps({params}) {
    var res2
    // const res = await getDataByQuery(params.id)
    res2 = await getRMovie()
    res2.movies = "null"
    const res = "null" 
    return {
        props: {
            movies: res,
            rmovies: res2.movies
        }
    }
}
