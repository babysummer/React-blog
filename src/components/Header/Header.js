import React, { Component } from 'react'
import './Header.css'
const logo = require('./logo.svg')

export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <span className='log'>
                    {/* <img src={logo} /> */}
                </span>
                <h1>Blog</h1>
            </div>
        )
    }
}
