import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './TopButton.css'

export default class TopButton extends Component {
    render() {
        return (
            <div className='topButton panel panel-default'>
                <button id='goToTop' className='fix-padding btn btn-default rightSettingBtn  pos-abt border-radius-half-left' data-toggle="tooltip" data-placement="left" data-original-title="返回顶部">
                    <span className='settings-icon2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-corner-right-up'>
                            <polyline points="10 9 15 4 20 9"></polyline>
                            <path d="M4 20h7a4 4 0 0 0 4-4V4"></path>
                        </svg>
                    </span>
                </button>
            </div>
        )
    }
}
