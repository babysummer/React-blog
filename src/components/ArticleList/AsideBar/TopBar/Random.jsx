import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../../ArticleList.css'
import randomImg1 from './images/random1.jpg'
import randomImg2 from './images/random2.jpg'
import randomImg3 from './images/8.jpg'
import randomImg4 from './images/7.jpg'
import randomImg5 from './images/2.jpg'

export default class Random extends Component {
    render() {
        return (
            <div id='widget-tabs-4-random' className='tab-pane fade wrapper-md no-js-show'>
                <h5 className='widget-title m-t-none text-md'>随机文章</h5>
                <ul className='list-group no-bg no-borders pull-in'>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img className='img-40px normal-shadow img-square' src={randomImg1} />
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a title='小河直街 - 京杭大运河'>小河直街 - 京杭大运河</a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views '>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>0</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img className='img-40px normal-shadow img-square' src={randomImg2} />
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a title='GitHub上一个很有意思的项目简直让我刷新三观'>GitHub上一个很有意思的项目简直让我刷新三观</a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views '>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>1</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img className='img-40px normal-shadow img-square' src={randomImg3} />
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a title='太子湾公园'>太子湾公园</a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views '>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>0</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img className='img-40px normal-shadow img-square' src={randomImg4} />
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a title='Cglib动态代理浅析'>Cglib动态代理浅析</a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views '>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>0</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img className='img-40px normal-shadow img-square' src={randomImg5} />
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a title='Linux系统SVN版本控制服务搭建：独立服务器运行和Apache方式运行'>Linux系统SVN版本控制服务搭建：独立服务器运行和Apache方式运行</a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views '>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>0</span>
                                </span>
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
