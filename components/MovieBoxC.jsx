import React from 'react'
import styles from "./styles/MovieBox.module.scss"
import Image from "next/image"
import data, {getJson} from "../lib/data"
export default class MovieBoxC extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movies: props.data == "null" ? getJson(data) : getJson(props.data)
            // data: getJson(data)
        }
    }
    render(){
        // console.log("movie", this.state.movies)
        // console.log("hi", this.props.data)
        return (
        <div className={styles.bg}>
            <div className={styles.moviebox}>
                {this.state.movies.map(i => (
                    <div 
                        className={styles.box}
                        key={i.id}>
                        <img 
                            className={styles.img}
                            src={i.img} 
                            alt="name"/>
                        <div 
                            className={styles.name}>
                            {i.id}
                        </div>
                        
                    </div>
                ))}
            </div>
            <div>
                {this.props.movies}
            </div>
        </div>
    )}
}
