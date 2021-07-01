import React, { Component } from 'react'
import styles from "./styles/NavBar.module.scss"

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <div className={styles.header}>
                <div >Home</div>
                <div>genres</div>
                <div>sing up</div>
                <div>Login</div>
                </div>
                <div>{this.props.children}</div>
                <div className={styles.footer}>Footer</div>
            </div>
        )
    }
}
