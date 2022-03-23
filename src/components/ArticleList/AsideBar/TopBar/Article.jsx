import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../../ArticleList.css'
import asideBarImg1 from './images/9.jpg'
import asideBarImg2 from './images/8.jpg'
import asideBarImg3 from './images/7.jpg'
import asideBarImg4 from './images/4.jpg'
import asideBarImg5 from './images/1.jpg'

export default class Article extends Component {
    render() {
        return (
            <div id='widget-tabs-4-hots' className='tab-pane fade in wrapper-md active'>
                <h5 className='widget-title m-t-none text-md'>热门文章</h5>
                <ul className='list-group no-bg no-borders pull-in m-b-none'>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img src={asideBarImg1} className='img-40px normal-shadow img-square'></img>
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a href='#!' title='记一次事务失效的问题排查记录'>
                                    记一次事务失效的问题排查记录
                                </a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views'>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>24</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img src={asideBarImg2} className='img-40px normal-shadow img-square'></img>
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a href='#!' title='新版博客系统全新上线，发文记录一下'>
                                    新版博客系统全新上线，发文记录一下
                                </a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views'>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>12</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img src={asideBarImg3} className='img-40px normal-shadow img-square'></img>
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a href='#!' title='Shiro权限管理框架（二）：Shiro结合Redis实现分布式或集群环境下的Session共享'>
                                    Shiro权限管理框架（二）：Shiro结合Redis实现分布式或集群环境下的Session共享
                                </a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views'>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>8</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img src={asideBarImg4} className='img-40px normal-shadow img-square'></img>
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a href='#!' title='通过Shell脚本以FTP方式上传文件到虚拟主机实现Hexo博客自动发布'>
                                    通过Shell脚本以FTP方式上传文件到虚拟主机实现Hexo博客自动发布
                                </a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views'>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>5</span>
                                </span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm m-r'>
                            <img src={asideBarImg5} className='img-40px normal-shadow img-square'></img>
                        </a>
                        <div className='clear'>
                            <h4 className='h5 l-h text-second'>
                                <a href='#!' title='Spring中FactoryBean的作用和实现原理'>
                                    Spring中FactoryBean的作用和实现原理
                                </a>
                            </h4>
                            <small className='text-muted post-head-icon'>
                                <span className='meta-views'>
                                    <span className='right-small-icons'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                                            </path>
                                        </svg>
                                    </span>
                                    <span className='sr-only'>评论数：</span>
                                    <span className='meta-value'>4</span>
                                </span>
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
