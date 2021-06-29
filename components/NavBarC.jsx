import React, { Component } from 'react'
import styles from "./styles/NavBar.module.scss"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div>{this.props.children}</div>
            </div>
        )
    }
}
