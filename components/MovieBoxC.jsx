import React from 'react'
import styles from "./styles/MovieBox.module.scss"
import data, {getJson} from "../lib/data"
export default class MovieBoxC extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            movies: props.data == "null" ? getJson(data) : getJson(props.data),
            rmovies: props.rmovies
            // data: getJson(data)
        }
    }
    render(){
        // console.log("movie", this.state.movies[0].vi)
        // console.log("hi", this.props.data)
        return (
        <div className={styles.bg}>
            <div className={styles.moviebox1}>
                <img src={this.state.movies[0].img} />
            </div>
            <div className={styles.moviebox2}>
            <div>Screenshots</div>
            {
                this.state.movies[0].vi.map ( (i, id) =>
                    <div id={id.toString()}>
                        <img src={i.img} />
                    </div>
                )
            }
            </div>
            <div className={styles.moviebox3}>
                <div className={styles.names}>Recommended movies for you</div>
                <div className={styles.rec} >
                    {
                        this.state.movies.slice(1,).map((i, id) =>
                            <div key={id.toString()} className={styles.mbox}>   
                                <img src={i.img} alt={i.id} />
                                <div className={styles.head}>{i.id}</div>
                            </div>
                            )
                    } 
                    {
                        this.state.rmovies.map((i, id)=>
                            <div key={(id + 100).toString()} className={styles.mbox}>
                                <img src={`../data/movie pic/${i}.jpg`} alt={i}/>
                                <div className={styles.head}>{i}</div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.moviebox4}>
                <h1>
                    {this.state.movies[0].id}
                    ({this.state.movies[0].y})
                </h1>
                <div>{this.state.movies[0].a}</div>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
                <div><br/></div>
            </div>
        </div>
    )}
}
