import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return (
            <footer id='footer' className='app-footer'>
                <div className='wrapper bg-light'>
                    <span className='pull-right hidden-xs text-ellipsis'>
                        <a href='https://beian.miit.gov.cn/' target='_blank'>浙ICP备18008136号-2</a>
                        &nbsp;Powered by&nbsp;
                        <a target='_blank' href='http://www.typecho.org'>Typecho</a>
                        &nbsp;|&nbsp;Theme by&nbsp;
                        <a target='_blank' href='https://www.ihewro.com/archives/489/'>handsome</a>
                    </span>
                    <span className='text-ellipsis'>
                        ©&nbsp;2022 Copyright&nbsp;
                        <a href='https://www.foreverblog.cn/go.html' target='_blank'>十年之约|虫洞穿梭</a>
                    </span>
                </div>
            </footer>
        )
    }
}
