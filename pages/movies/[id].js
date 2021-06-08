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
    // const res = await getDataByQuery(params.id)
    const res2 = await getRMovie()
    const res = "null" 
    return {
        props: {
            movies: res,
            rmovies: res2.movies
        }
    }
}
