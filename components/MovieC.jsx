import React, { Component } from 'react'
import styles from "./styles/Movie.module.scss"
import {Router} from "next/router"
export default class MovieC extends Component {
    constructor(props){
        super(props)
        this.toMovie = this.set1.bind(this)
        this.setMovie = this.set2.bind(this)
        this.state = {q: "null"}
    }
    set1(e, data="tt"){
        if (e.key == "Enter"){
            const rounter = Router.prototype
            if (this.state.q !== "null"){
                rounter.push({
                    pathname: `/movies/${this.state.q}`,
                })
            }else {

            }

    }

    }
    set2(e){
        this.setState({
            q: e.target.value
        })
    }
    render() {
        return (
            <div className={styles.container}>
            <img src="./bg.jpg" alt="pk movie background"/>
            <input onKeyPress={e => this.toMovie(e)} className={styles.input} type="search" placeholder={"Search Movie Here"} onChange={this.setMovie} />
            </div>
        )
    }
}
