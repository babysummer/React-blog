import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { BrowserRouter as Router, useRoutes, Routes, Route, Navigate } from 'react-router-dom'
import routes from '../../routes'
import './ArticleList.css'
import AsideBar from './AsideBar/AsideBar'
import ArticleContent from './ArticleContent/ArticleContent'
import FirstArticle from './ArticleContent/FirstArticle'

export default class ArticleList extends Component {
    // const element = useRoutes(routes)
    render() {
        return (
            <div id='content' className='app-content' >
                {/* loading */}
                <div id='loading' className='butterbar active hide' >
                    <span className='bar'></span>
                </div>
                <a className='off-screen-toggle hide'></a>
                <main className='app-content-body animated fadeIn'>
                    <div className='hbox hbox-auto-xs hbox-auto-sm'>
                        {/* 首页默认中间内容 */}
                        {/* <Router> */}
                        {/* {element} */}
                        <Routes>
                            <Route path="/" element={<ArticleContent />} />
                            <Route path="/firstarticle" element={<FirstArticle />} />
                            {/* <Route path="/" element={<Navigate to="/articlecontent" />} /> */}
                        </Routes>
                        {/* </Router> */}
                        {/* 首页右侧栏 */}
                        {/* <Router> */}
                        <AsideBar />
                        {/* </Router> */}
                    </div>
                </main>
            </div >
        )
    }
}

