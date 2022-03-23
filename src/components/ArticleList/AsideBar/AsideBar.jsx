import React, { Component } from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import TopBar from './TopBar/TopBar'


export default class AsideBar extends Component {

    render() {
        return (
            <aside className='asideBar col w-md bg-white-only bg-auto no-border-xs'>
                <div id='sidebar'>
                    {/* 热点信息 */}
                    {/* <Router> */}
                    <TopBar />
                    {/* </Router> */}
                    {/* 博客信息 */}
                    <section id='blog_info' className='widget widget_categories wrapper-md clear'>
                        <h5 className='widget-title m-t-none text-md'>博客信息</h5>
                        <ul className='list-group box-shadow-wrap-normal'>
                            <li className='list-group-item text-second'>
                                <span className='blog-info-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-award'>
                                        <circle cx="12" cy="8" r="7"></circle>
                                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                                    </svg>
                                </span>
                                <span className='badge pull-right'>63</span>文章数目
                            </li>
                            <li className='list-group-item text-second'>
                                <span className='blog-info-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                                        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                                    </svg>
                                </span>
                                <span className='badge pull-right'>284</span>评论数目
                            </li>
                            <li className='list-group-item text-second'>
                                <span className='blog-info-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-calendar'>
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                        <line x1="16" y1="2" x2="16" y2="6"></line>
                                        <line x1="8" y1="2" x2="8" y2="6"></line>
                                        <line x1="3" y1="10" x2="21" y2="10"></line>
                                    </svg>
                                </span>
                                <span className='badge pull-right'>4年43天</span>运行天数
                            </li>
                            <li className='list-group-item text-second'>
                                <span className='blog-info-icons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-activity'>
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </span>
                                <span className='badge pull-right'>1 年前</span>最后活动
                            </li>
                        </ul>
                    </section>
                    {/* 非文章页面 */}
                    <section id='tag_cloud-2' className='widget widget_tag_cloud wrapper-md clear'>
                        <h5 className='widget-title m-t-none text-md'>标签云</h5>
                        <div className='tags l-h-2x'>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Java'>Java</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Linux'>Linux</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='数据库'>数据库</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='源码'>源码</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Shiro'>Shiro</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='框架'>框架</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='JDK'>JDK</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='动态代理'>动态代理</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Apache'>Apache</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='PHP'>PHP</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='MySQL'>MySQL</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='生活'>生活</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='随笔'>随笔</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='博客'>博客</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='RocketMQ'>RocketMQ</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Jenkins'>Jenkins</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Maven'>Maven</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Nginx'>Nginx</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Servlet'>Servlet</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='JavaWeb'>JavaWeb</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Spring'>Spring</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='MongoDB'>MongoDB</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Discuz'>Discuz</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Cglib'>Cglib</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='SVN'>SVN</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='Class'>Class</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='ClassLoader'>ClassLoader</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='SpringBoot'>SpringBoot</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='设计模式'>设计模式</a>
                            <a href='#!' className='label badge' data-toggle='tooltip' data-original-title='单例模式'>单例模式</a>
                        </div>
                    </section>
                </div>
            </aside>
        )
    }
}
