import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <header id='header' className='app-header navbar box-shadow-bottom-lg'>
                <div className='text-ellipsis navbar-header bg-white'>
                    <a href='#!' className='navbar-brand text-lt'>
                        <span id='navbar-brand-day'>
                            <i className='fontello fontello-home'></i>
                            <span className='hidden-folded m-l-xs'>guitu18.com</span>
                        </span>
                    </a>
                </div>
                <div className='collapse pos-rlt navbar-collapse bg-white'>
                    <ul className='nav navbar-nav hidden-sm'>
                        <li className='dropdown pos-stc'>
                            <a href='#' id='statistic_pane' data-status="true" className='dropdown-toggle feathericons dropdown-toggle' aria-expanded="true" data-toggle="dropdown">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-pie-chart'>
                                    <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                                    <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                                </svg>
                                <span className='caret'></span>
                            </a>
                            <div className='dropdown-menu wrapper w-full bg-white'>
                                <div className='row'>
                                    <div className='col-sm-8 b-l b-light'>
                                        <div className='m-l-xs m-t-xs m-b-sm font-bold'>
                                            动态日历
                                            <span className='info-icons'>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-info" data-toggle="tooltip" title="" data-original-title="统计近10个月的文章和作者评论数目">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <line x1="12" y1="16" x2="12" y2="12"></line>
                                                    <line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                            </span>
                                        </div>
                                        <div className='text-center'>
                                            <nav className='loading-echart text-center m-t-lg m-b-lg hide'>
                                                <p className='infinite-scroll-request'>
                                                    <i className="animate-spin fontello fontello-refresh"></i>
                                                    Loading...
                                                </p>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 b-l b-light'>
                                        <div className="m-l-xs m-t-xs m-b-sm font-bold">分类雷达图</div>
                                        <div className='text-center'>
                                            <nav className='loading-echart text-center m-t-lg m-b-lg hide'>
                                                <p className='infinite-scroll-request'>
                                                    <i className="animate-spin fontello fontello-refresh"></i>
                                                    Loading...
                                                </p>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-sm-4 b-l b-light'>
                                        <div className="m-l-xs m-t-xs m-b-sm font-bold">发布统计图</div>
                                        <div className='text-center'>
                                            <nav className='loading-echart text-center m-t-lg m-b-lg hide'>
                                                <p className='infinite-scroll-request'>
                                                    <i className="animate-spin fontello fontello-refresh"></i>
                                                    Loading...
                                                </p>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 b-l b-light'>
                                        <div className="m-l-xs m-t-xs m-b-sm font-bold">分类统计图</div>
                                        <div className='text-center'>
                                            <nav className='loading-echart text-center m-t-lg m-b-lg hide'>
                                                <p className='infinite-scroll-request'>
                                                    <i className="animate-spin fontello fontello-refresh"></i>
                                                    Loading...
                                                </p>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className='col-sm-4 b-l b-light'>
                                        <div className="m-l-xs m-t-xs m-b-sm font-bold">标签统计图</div>
                                        <div className='text-center'>
                                            <nav className='loading-echart text-center m-t-lg m-b-lg hide'>
                                                <p className='infinite-scroll-request'>
                                                    <i className="animate-spin fontello fontello-refresh"></i>
                                                    Loading...
                                                </p>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <form id='searchform1' className='searchform navbar-form navbar-form-sm navbar-left shift'>
                        <div className='form-group'>
                            <div className='input-group rounded bg-white-pure box-shadow-wrap-normal'>
                                <input autoComplete='off' id='search_input' type='search' name='s' className='transparent rounded form-control input-sm no-borders padder' placeholder='输入关键词搜索…' />
                                <ul id='search_tips_drop' className='overflow-y-auto small-scroll-bar dropdown-menu hide move-shadow'></ul>
                                <span id='search_submit' className='transparent input-group-btn'>
                                    <button type='submit' className='transparent btn btn-sm'>
                                        <span id='icon-search' className='feathericons'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-search'>
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </form>
                    <a id='searchUrl' ></a>
                    <ul className='nav navbar-nav navbar-right'>
                        {/* 闲言碎语 */}
                        <li className='dropdown'>
                            <a href='#' className='feathericons dropdown-toggle' data-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-twitch'>
                                    <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
                                </svg>
                                <span className='badge badge-sm up bg-danger pull-right-xs'>新</span>
                            </a>
                            {/* dropdown */}
                            <div className='dropdown-menu w-xl animated fadeInUp'>
                                <div className='panel bg-white'>
                                    <div className='panel-heading b-light bg-light'>
                                        <strong>闲言碎语</strong>
                                    </div>
                                    <div className='list-group' id='smallRecording'>
                                        <a className='list-group-item'>
                                            <span className='clear block m-b-none words_contents'>
                                                博客放养了一年多，今天迁移到腾讯云了，不得不说腾讯的无忧计划是真的香，以后再也不搬家了。迁移过来后，主题出了不少问题，索性从v6.0升级到最新版v8.2.1了，开始还担心又要重新配置主题了，一堆东西挺闹心的。后面发现无需修改任何配置，上传新版后直接无缝升级，以前7.0升级的时候会出现各种问题，干脆降回去了。看来后期版本，作者开始重视版本升级的用户体验了，所有配置自动兼容，很赞！
                                                <br />
                                                <small className='text-muted'>September 29th, 2021 at 09:03 pm</small>
                                            </span>
                                        </a>
                                        <a className='list-group-item'>
                                            <span className='clear block m-b-none words_contents'>
                                                最近这雨是包月了啊，还是连续包月那种
                                                <br />
                                                <small className='text-muted'>July 5th, 2020 at 08:06 pm</small>
                                            </span>
                                        </a>
                                        <a className='list-group-item'>
                                            <span className='clear block m-b-none words_contents'>
                                                端午节后的第一周比平常多了一天，不巧的是这一周的我还特别的闲，更加让我感觉这一周特别长。上班又不能老划水以浪费时间，所以利用这段时间进行自我提升。只是最近发生的事情比较多，又是刚收假，所以进入深度学习状态的速度比较慢，效率不高。学习还是一件比较吃自制力的事情，加油吧。
                                                <br />
                                                <small className='text-muted'>July 2nd, 2020 at 09:56 am</small>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        {/* 登录管理 */}
                        <li className='dropdown' id='easyLogin'>
                            <a className='dropdown-toggle clear' data-toggle="dropdown">
                                <span className='feathericons'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-key'>
                                        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4">
                                        </path>
                                    </svg>
                                    {/* 三角图标 */}
                                    <b className='caret'></b>
                                </span>
                            </a>
                            <div className='dropdown-menu w-lg wrapper bg-white animated fadeIn' aria-labelledby="navbar-login-dropdown">
                                <form id='Login_form'>
                                    <div className='form-group'>
                                        <label for="navbar-login-user">用户名</label>
                                        <input type="text" name="name" id="navbar-login-user" className='form-control' placeholder="用户名或电子邮箱" />
                                    </div>
                                    <div className='form-group'>
                                        <label for="navbar-login-password">密码</label>
                                        <input type="password" name="password" id="navbar-login-password" className='form-control' placeholder="密码" />
                                    </div>
                                    <button type='submit' id='login-submit' className='btn-rounded box-shadow-wrap-lg btn-gd-primary padder-lg' style={{ width: '100%' }}>
                                        <span>登录</span>
                                        <span className="text-active">登录中...</span>
                                        <span className="banLogin_text">刷新页面后登录</span>
                                        <i className="animate-spin  fontello fontello-spinner hide" id="spin-login"></i>
                                        <i className="animate-spin fontello fontello-refresh hide" id="ban-login"></i>
                                    </button>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
}
