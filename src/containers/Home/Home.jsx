import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './Home.css'
import Header from '../../components/Header/Header'
import Menus from '../../components/Menus/Menus'
import ArticleList from '../../components/ArticleList/ArticleList'
import Footer from '../../components/Footer/Footer'
import TopButton from '../../components/TopButton/TopButton'
import Setting from '../../components/Setting/Setting'

export default class Home extends Component {
    render() {
        return (
            <div id='alllayout' className='app app-aside-fix container app-header-fixed'>
                <Router>
                    <Header />
                    <Menus />
                    <ArticleList />
                    <TopButton />
                    <Footer />
                    <Setting />
                </Router>
            </div>
        )
    }
}
