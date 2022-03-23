import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import routes from '../../../../routes'
import Article from './Article'
import Review from './Review'
import Random from './Random'
import '../../ArticleList.css'


export default class TopBar extends Component {
    constructor() {
        super();
        this.state = {
            activeBar: 'article'
        }
    }
    handleExpandBar = (name) => {
        if (this.state.activeBar === name) {
            this.setState({ activeBar: '' })
        } else {
            this.setState({ activeBar: name })
        }
    }
    render() {
        return (
            <section id='tabs-4' className='widget widget_tabs clear'>
                <div className='nav-tabs-alt no-js-hide'>
                    <ul className='nav nav-tabs nav-justified box-shadow-bottom-normal tablist' role="tablist">
                        <li className='active' data-index='0' role="presentation">
                            {/* <li className={`${this.state.activeBar === "article" ? 'active' : ''}`} onClick={() => this.handleExpandBar("article")} data-index='0' role="presentation"> */}
                            <a data-target="#widget-tabs-4-hots" aria-controls="widget-tabs-4-hots" data-toggle="tab" aria-expanded='true' role="tab">
                                <div className='sidebar-icon wrapper-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-thumbs-up'>
                                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                                    </svg>
                                </div>
                                {/* <span className='sr-only'>热门文章</span> */}
                            </a>
                        </li>
                        <li data-index='1' role="presentation">
                            {/* <li data-index='1' className={`${this.state.activeBar === "review" ? 'active' : ''}`} onClick={() => this.handleExpandBar("review")}> */}
                            <a data-target="#widget-tabs-4-comments" aria-controls="widget-tabs-4-comments" data-toggle="tab" aria-expanded='false' role="tab">
                                <div className='sidebar-icon wrapper-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-square'>
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                    </svg>
                                </div>
                                {/* <span className='sr-only'>最新评论</span> */}
                            </a>
                        </li>
                        <li data-index='2' role="presentation">
                            {/* <li data-index='2' className={`${this.state.activeBar === "random" ? 'active' : ''}`} onClick={() => this.handleExpandBar("random")}> */}
                            <a data-target="#widget-tabs-4-random" aria-controls="widget-tabs-4-random" data-toggle="tab" aria-expanded='false' role="tab">
                                <div className='sidebar-icon wrapper-sm'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-gift'>
                                        <polyline points="20 12 20 22 4 22 4 12"></polyline>
                                        <rect x="2" y="7" width="20" height="5"></rect>
                                        <line x1="12" y1="22" x2="12" y2="7"></line>
                                        <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                                        <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                                    </svg>
                                </div>
                                {/* <span className='sr-only'>随机文章</span> */}
                            </a>
                        </li>
                        <span className='navs-slider-bar'></span>
                    </ul>
                </div>
                <div className='tab-content'>
                    {/* 热门文章 */}
                    <Article />
                    {/* 最新评论 */}
                    <Review />
                    <Random />
                </div>
            </section>
        )
    }
}
