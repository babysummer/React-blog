import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './Menus.css'
import authorImg from './author.jpg'

export default class Menus extends Component {
    constructor() {
        super();
        this.state = {
            activeCollapse: 'classify'
        }
    }

    handleExpandCollaps = (name) => {
        if (this.state.activeCollapse === name) {
            this.setState({ activeCollapse: '' })
        } else {
            this.setState({ activeCollapse: name })
        }
    }

    render() {
        return (
            <aside id='aside' className='app-aside hidden-xs bg-white'>
                <div className='aside-wrap'>
                    <div className='navi-wrap scroll-y scroll-hide'>
                        {/* user start */}
                        <div id='aside-user' className='clearfix hidden-xs text-center hide show'>
                            <div className='dropdown wrapper vertical-wrapper'>
                                <div>
                                    <a href='#'>
                                        <span className='thumb-lg w-auto-folded avatar m-t-sm vertical-avatar'>
                                            <img src={authorImg} className='img-full img-circle normal-shadow'></img>
                                        </span>
                                    </a>
                                </div>
                                <a href='#' aria-expanded="false" data-toggle="dropdown" className='dropdown-toggle hidden-folded vertical-flex'>
                                    <span className='clear'>
                                        <span className='block m-t-sm'>
                                            <strong className='font-bold text-lt'>夜月归途</strong>
                                            {/* 三角样式 */}
                                            <b className='caret'></b>
                                        </span>
                                        <span className='text-muted text-xs block'></span>
                                    </span>
                                </a>
                                <ul className='dropdown-menu animated fadeInRight w hidden-folded no-padder'>
                                    <li className='wrapper b-b m-b-sm bg-info m-n'>
                                        <span className='arrow top hidden-folded arrow-info'></span>
                                        <div>
                                            <p>下午好，是时候打个盹了</p>
                                        </div>
                                        <div className='progress progress-xs m-b-none dker'>
                                            <div className='progress-bar bg-white' data-toggle="tooltip" data-original-title="时间已经度过58.33%" style={{ width: '58.33%' }}></div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* user end */}
                        {/* nav start */}
                        <nav className='navi clearfix'>
                            <ul className='nav'>
                                {/* author与nav之间的透明分割线 */}
                                <div className='line dk hidden-folded'></div>
                                <li className='hidden-folded padder m-t m-b-sm text-muted text-xs'>
                                    <span>导航</span>
                                </li>
                                {/* 主页 */}
                                <li>
                                    <Link to='' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-home'>
                                                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                                <polyline points="9 22 9 12 15 12 15 22"></polyline>
                                            </svg>
                                        </span>
                                        <span>首页</span>
                                    </Link>
                                </li>
                                <li>
                                    <a target={'_self'} href='#!' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-archive'>
                                                <polyline points="21 8 21 21 3 21 3 8"></polyline>
                                                <rect x="1" y="3" width="22" height="5"></rect>
                                                <line x1="10" y1="12" x2="14" y2="12"></line>
                                            </svg>
                                        </span>
                                        <span>归档</span>
                                    </a>
                                </li>
                                <li>
                                    <a target={'_self'} href='#!' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-at-sign'>
                                                <circle cx="12" cy="12" r="4"></circle>
                                                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
                                            </svg>
                                        </span>
                                        <span>留言</span>
                                    </a>
                                </li>
                                <li>
                                    <a target={'_self'} href='#!' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-image'>
                                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                                                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                                                <polyline points="21 15 16 10 5 21"></polyline>
                                            </svg>
                                        </span>
                                        <span>相册</span>
                                    </a>
                                </li>
                                <li>
                                    <a target={'_self'} href='#!' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-coffee'>
                                                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                                                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                                                <line x1="6" y1="1" x2="6" y2="4"></line>
                                                <line x1="10" y1="1" x2="10" y2="4"></line>
                                                <line x1="14" y1="1" x2="14" y2="4"></line>
                                            </svg>
                                        </span>
                                        <span>关于</span>
                                    </a>
                                </li>
                                <li>
                                    <a target={'_self'} href='#!' className='auto'>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-link'>
                                                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                                                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                                            </svg>
                                        </span>
                                        <span>链接</span>
                                    </a>
                                </li>
                                {/* 左导航栏中间部分的分割线 */}
                                <li className='line dk'></li>
                                {/* 左导航栏组成部分 */}
                                <li className='hidden-folded padder m-t m-b-sm text-muted text-xs'>
                                    <span>组成</span>
                                </li>
                                {/* 分类 */}
                                <li className={`${this.state.activeCollapse === "classify" ? 'active' : ''}`} onClick={() => this.handleExpandCollaps("classify")} data-id="classify">
                                    <a className='auto'>
                                        <span className='pull-right text-muted'>
                                            <i className='fontello icon-fw fontello-angle-right text'></i>
                                            <i className='fontello icon-fw fontello-angle-down text-active'></i>
                                        </span>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-grid'>
                                                <rect x="3" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="3" width="7" height="7"></rect>
                                                <rect x="14" y="14" width="7" height="7"></rect>
                                                <rect x="3" y="14" width="7" height="7"></rect>
                                            </svg>
                                        </span>
                                        <span>分类</span>
                                    </a>
                                    <ul className='nav nav-sub dk'>
                                        <li className='nav-sub-header'>
                                            <a>
                                                <span>分类</span>
                                            </a>
                                        </li>
                                        {/* 循环输出分类开始 */}
                                        <li className='category-level-0 category-parent'>
                                            <a href='#!'>
                                                <b className='badge pull-right'>49</b>
                                                技能学习
                                            </a>
                                        </li>
                                        <li className='category-level-0 category-parent'>
                                            <a href='#!'>
                                                <b className='badge pull-right'>5</b>
                                                生活随笔
                                            </a>
                                        </li>
                                        <li className='category-level-0 category-parent'>
                                            <a href='#!'>
                                                <b className='badge pull-right'>9</b>
                                                旅行相册
                                            </a>
                                        </li>
                                        {/* 循环输出分类结束 */}
                                    </ul>
                                </li>
                                {/* 页面 */}
                                <li className={`${this.state.activeCollapse === "page" ? 'active' : ''}`} onClick={() => this.handleExpandCollaps("page")}>
                                    <a className='auto'>
                                        <span className='pull-right text-muted'>
                                            <i className='fontello icon-fw fontello-angle-right text'></i>
                                            <i className='fontello icon-fw fontello-angle-down text-active'></i>
                                        </span>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-file'>
                                                <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                                <polyline points="13 2 13 9 20 9"></polyline>
                                            </svg>
                                        </span>
                                        <span>页面</span>
                                    </a>
                                    <ul className='nav nav-sub dk'>
                                        <li className='nav-sub-header'>
                                            <a>
                                                <span>页面</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href='#!'>
                                                <span>时光机</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                {/* 友情链接 */}
                                <li className={`${this.state.activeCollapse === "link" ? 'active' : ''}`} onClick={() => this.handleExpandCollaps("link")}>
                                    <a className='auto'>
                                        <span className='pull-right text-muted'>
                                            <i className='fontello icon-fw fontello-angle-right text'></i>
                                            <i className='fontello icon-fw fontello-angle-down text-active'></i>
                                        </span>
                                        <span className='nav-icon'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <span>友链</span>
                                    </a>
                                    <ul className='nav nav-sub dk'>
                                        <li className='nav-sub-header'>
                                            <a>
                                                <span>友链</span>
                                            </a>
                                        </li>
                                        <li data-original-title="基础云计算服务提供商" data-toggle="tooltip" data-placement="top">
                                            <a rel="noopener" href="https://www.vpsor.cn/" target="_blank">
                                                <span>硅云</span>
                                            </a>
                                        </li>
                                        <li data-original-title="通俗易懂、深入浅出的python教程" data-toggle="tooltip" data-placement="top">
                                            <a rel="noopener" href="http://www.python66.com/" target="_blank">
                                                <span>Python教程</span>
                                            </a>
                                        </li>
                                        <li data-original-title="记录生活与代码问题的个人博客" data-toggle="tooltip" data-placement="top">
                                            <a rel="noopener" href="https://www.haowenbo.com/" target="_blank">
                                                <span>Easy Blog</span>
                                            </a>
                                        </li>
                                        <li data-original-title="一个记录、展示独立博客的平台" data-toggle="tooltip" data-placement="top">
                                            <a rel="noopener" href="https://www.foreverblog.cn/" target="_blank">
                                                <span>十年之约</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        {/* nav end */}
                    </div>
                </div>
            </aside>
        )
    }
}
