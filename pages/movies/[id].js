import React from 'react'
import {useRouter} from "next/router"
import MovieBoxC from "../../components/MovieBoxC"
import getDataByQuery from "../../lib/api"

export default function movie(props) {
    // const data = props.movies
    // console.log("ji", data)
    return (
        <MovieBoxC data={props.movies}/>
    )
}

export async function getServerSideProps({params}) {
    // const res = await getDataByQuery(params.id)
    const res = "null"
    return {
        props: {
            movies: res
        }
    }
}
