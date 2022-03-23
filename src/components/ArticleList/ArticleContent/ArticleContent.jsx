import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import { Link } from 'react-router-dom'
import '../ArticleList.css'

export default class ArticleContent extends Component {
    render() {
        return (
            <div className='col center-part'>
                <header className='bg-light lter wrapper-md'>
                    <h1 className='m-n font-thin text-black l-h'>夜月归途</h1>
                    <small className='text-muted letterspacing indexWords'>这是他替你起的名字，执掌江山，定波安澜，他会看着你。</small>
                </header>
                <div id='post-panel' className='wrapper-md skt-loading'>
                    {/* 首页输出文章 */}
                    <div className='blog-post post-list'>
                        <div className='single-post panel box-shadow-wrap-normal'>
                            <div className='post-meta wrapper-lg'>
                                <h2 className='m-t-none text-ellipsis index-post-title text-title'>
                                    <Link to="/firstarticle">
                                        SSH公钥登录和RSA非对称加密
                                    </Link>
                                </h2>
                                <p className='summary l-h-2x text-muted'>
                                    SSH登录方式接触过Linux服务器的同学肯定用过SSH协议登录系统，通常SSH协议都有两种登录方式：密码口令登录和公钥登陆。一、密码口令（类似于账号密码登录）      1.客户端连接服务器，服务器把公钥发给客户端
                                    2.客户端输入登录口令，并用服务器公钥加密后提交给服务器
                                    3.服务器用私钥解密，结果匹配，则允许登录
                                    二、公钥登录（一般用RSA非对称加密）     1...
                                </p>
                                <div className='line line-lg b-b b-light'></div>
                                <div className='text-muted post-item-foot-icon text-ellipsis list-inline'>
                                    <li>
                                        <span className='m-r-sm right-small-icons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <a href="#!">夜月归途</a>
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-clock'>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </span>
                                        2020 年 05 月 01 日
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-square'>
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </span>
                                        <a href="#!">4 条评论</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='single-post panel box-shadow-wrap-normal'>
                            <div className='post-meta wrapper-lg'>
                                <h2 className='m-t-none text-ellipsis index-post-title text-title'>
                                    <a href="https://www.guitu18.com/post/2020/04/22/70.html">
                                        MongoDB常用查询语法及与MySQL对比示例
                                    </a>
                                </h2>
                                <p className='summary l-h-2x text-muted'>
                                    MongoDB和MySQL的一些常用的查询语句对比，MongoDB的一些语法及其查询示例。
                                </p>
                                <div className='line line-lg b-b b-light'></div>
                                <div className='text-muted post-item-foot-icon text-ellipsis list-inline'>
                                    <li>
                                        <span className='m-r-sm right-small-icons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <a href="#!">夜月归途</a>
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-clock'>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </span>
                                        2020 年 04 月 22 日
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-square'>
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </span>
                                        <a href="#!">1 条评论</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='single-post panel box-shadow-wrap-normal'>
                            <div className='post-meta wrapper-lg'>
                                <h2 className='m-t-none text-ellipsis index-post-title text-title'>
                                    <a href="https://www.guitu18.com/post/2020/02/04/67.html">
                                        自建Git服务器 - 创建属于你自己的代码仓库
                                    </a>
                                </h2>
                                <p className='summary l-h-2x text-muted'>
                                    最近有线上朋友私信问我怎么搭建个人博客，也有咨询我个人项目的代码是如何保管的，还有一个朋友问我买了服务器玩了一段时间，等新鲜感过了就不知道做什么了。关于这些问题并没有一个标准答案，每个人都有自己的使用习惯，找到适合你的才是最好的。关于博客搭建及使用的工具或服务在我博客的关于页里已经写的比较详细了，如果有人想看具体步骤我可以专门写一篇详细的教程，本篇先来讲讲我的个人项目代码是如何保管的。
                                </p>
                                <div className='line line-lg b-b b-light'></div>
                                <div className='text-muted post-item-foot-icon text-ellipsis list-inline'>
                                    <li>
                                        <span className='m-r-sm right-small-icons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <a href="#!">夜月归途</a>
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-clock'>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </span>
                                        2020 年 02 月 04 日
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-square'>
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </span>
                                        <a href="#!">3 条评论</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                        <div className='single-post panel box-shadow-wrap-normal'>
                            <div className='post-meta wrapper-lg'>
                                <h2 className='m-t-none text-ellipsis index-post-title text-title'>
                                    <a href="https://www.guitu18.com/post/2020/01/20/66.html">
                                        Docker虚拟化管理：30分钟教你学会用Docker
                                    </a>
                                </h2>
                                <p className='summary l-h-2x text-muted'>
                                    关于Docker的官方介绍网上太多了我就不贴了，就实际体验来说Docker可以极大的简化环境搭建及服务部署的操作流程，大大降低部署的时间成本，解放你的双手。本文不会深入讲解Docker底层架构及运行原理，也不会有一堆架构图贴在这里。该篇旨在让你以最快的速度学会使用Docker，关于Docker的架构及其底层的一些知识，你可以在学会Docker的基本使用之后再去了解。开门见山讲架构聊底层有点容...
                                </p>
                                <div className='line line-lg b-b b-light'></div>
                                <div className='text-muted post-item-foot-icon text-ellipsis list-inline'>
                                    <li>
                                        <span className='m-r-sm right-small-icons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="12" cy="7" r="4"></circle>
                                            </svg>
                                        </span>
                                        <a href="#!">夜月归途</a>
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-clock'>
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                            </svg>
                                        </span>
                                        2020 年 01 月 20 日
                                    </li>
                                    <li>
                                        <span className='right-small-icons m-r-sm'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-square'>
                                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                            </svg>
                                        </span>
                                        <a href="#!">4 条评论</a>
                                    </li>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 分页首页按钮 */}
                    <nav className='text-center m-t-lg m-b-lg'>
                        <ol className='page-navigator'>
                            <li className='current'>
                                <a href="#!">1</a>
                            </li>
                            <li><a href="#!">2</a></li>
                            <li><a href="#!">3</a></li>
                            <li><a href="#!">4</a></li>
                            <li><span>...</span></li>
                            <li><a href="#!">7</a></li>
                            <li className='next'>
                                <a href='#!'>
                                    <i className='fontello fontello-chevron-right'>

                                    </i>
                                </a>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        )
    }
}
