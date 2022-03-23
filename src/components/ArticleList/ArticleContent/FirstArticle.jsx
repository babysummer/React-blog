import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../ArticleList.css'
import './FirstArticle.css'

export default class FirstArticle extends Component {
  render() {
    return (
      <div className='col center-part'>
        {/* 头部 */}
        <header id='small_widgets' className='bg-light lter wrapper-md'>
          {/* 文章标题 */}
          <h1 className='entry-title m-n font-thin text-black l-h'>
            SSH公钥登录和RSA非对称加密
            <a className='plus-font-size' data-toggle="tooltip" data-original-title="点击改变文章字体大小">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-type'>
                <polyline points="4 7 4 4 20 4 20 7"></polyline>
                <line x1="9" y1="20" x2="15" y2="20"></line>
                <line x1="12" y1="4" x2="12" y2="20"></line>
              </svg>
            </a>
            <a className='speech-button m-l-sm superscript' data-toggle="tooltip" data-original-title="朗读文章">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-mic'>
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                <line x1="12" y1="19" x2="12" y2="23"></line>
                <line x1="8" y1="23" x2="16" y2="23"></line>
              </svg>
            </a>
            <span className='morphing-btn-wrap'>
              <a id='morphing' href='#!' className='read_mode superscript m-l-sm morphing-btn' data-toggle="tooltip" data-placement="right" data-original-title="阅读模式">
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-book-open'>
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </a>
            </span>
            <div className='morphing-btn-clone'></div>
          </h1>
          {/* 文章标题下面的小部件 */}
          <ul className='entry-meta text-muted list-inline m-b-none small post-head-icon'>
            {/* 作者 */}
            <li className='meta-author'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-user'>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <span className='sr-only'>博主：</span>
              <a className='meta-value'>夜月归途</a>
            </li>
            {/* 发布时间 */}
            <li className='meta-date'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-clock'>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </span>
              <span className='sr-only'>发布时间：</span>
              <time className='meta-value'>2020年05月01日</time>
            </li>
            {/* 浏览数 */}
            <li className='meta-views'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-eye'>
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </span>
              <time className='meta-value'>3110次浏览</time>
            </li>
            {/* 评论数 */}
            <li className='meta-comments'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-message-circle'>
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                </svg>
              </span>
              <a className='meta-value'>4条评论</a>
            </li>
            {/* 文字数目 */}
            <li className='meta-word'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-pen-tool'>
                  <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
                  <path d="M2 2l7.586 7.586"></path>
                  <circle cx="11" cy="11" r="2"></circle>
                </svg>
              </span>
              <span className='meta-value'>4488字数</span>
            </li>
            {/* 分类 */}
            <li className='meta-categories'>
              <span className='post-icons'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-hash'>
                  <line x1="4" y1="9" x2="20" y2="9"></line>
                  <line x1="4" y1="15" x2="20" y2="15"></line>
                  <line x1="10" y1="3" x2="8" y2="21"></line>
                  <line x1="16" y1="3" x2="14" y2="21"></line>
                </svg>
              </span>
              <span className='sr-only'>分类：</span>
              <span className='meta-value'>
                <a href='#!'>技能学习</a>
              </span>
            </li>
          </ul>
        </header>
        {/* 内容 */}
        <div id='post-panel' className='wrapper-md'>
          <ol className='breadcrumb bg-white-pure'>
            <li>
              <Link to="/" data-toggle="tooltip" data-original-title="返回首页">
                <span className='home-icons'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='feather feather-home'>
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                    <polyline points="9 22 9 12 15 12 15 22"></polyline>
                  </svg>
                </span>
                首页
              </Link>
            </li>
            <li className='active'>
              正文&nbsp;&nbsp;
            </li>
            <div style={{ float: 'right' }}>
              分享到：
              <a data-toggle="tooltip" data-original-title="分享到QQ空间">
                <i className='iconfont icon-qqkongjian' aria-hidden="true" style={{ fontSize: '20px' }}></i>
              </a>
              <a data-toggle="tooltip" data-original-title="分享到微博">
                <i className='fontello fontello-weibo' aria-hidden="true" style={{ fontSize: '15px' }}></i>
              </a>
              <a id='generateShareImg' data-toggle="tooltip" data-original-title="生成分享图">
                <i className='fontello fontello-camera' aria-hidden="true" style={{ fontSize: '13px' }}></i>
              </a>
            </div>
          </ol>
          {/* 博客文章样式 */}
          <div className='blog-post' id='postpage'>
            <article className='single-post panel'>
              <div id='post-content' className='wrapper-lg'>
                <div className='entry-content l-h-2x' id='md_handsome_origin' click_status="true">
                  <h2>SSH登录方式</h2>
                  <p>接触过Linux服务器的同学肯定用过SSH协议登录系统，通常SSH协议都有两种登录方式：密码口令登录和公钥登陆。</p>
                  <p>一、密码口令（类似于账号密码登录）</p>
                  <pre>
                    <div className='vditor-copy'>
                      <textarea></textarea>
                      <span className='vditor-tooltipped vditor-tooltipped__w'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </span>
                    </div>
                    <code className='hljs yaml vditor-linenumber small-scroll-bar overflow-y-auto' style={{ maxHeight: '698px' }}>
                      <span className='hljs-number'>1</span>
                      <span className='hljs-string'>.客户端连接服务器，服务器把公钥发给客户端</span>
                      <span className='hljs-number'>2</span>
                      <span className='hljs-string'>.客户端输入登录口令，并用服务器公钥加密后提交给服务器</span>
                      <span className='hljs-number'>3</span>
                      <span className='hljs-string'>.服务器用私钥解密，结果匹配，则允许登录</span>
                      <div className='vditor-linenumber__temp' style={{ display: 'none' }}></div>
                      {/* <span className='vditor-linenumber__rows'>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span> */}
                    </code>
                  </pre>
                  <p>二、公钥登录（一般用RSA非对称加密）</p>
                  <pre>
                    <div className='vditor-copy'>
                      <textarea></textarea>
                      <span className='vditor-tooltipped vditor-tooltipped__w'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </span>
                    </div>
                    <code className='hljs yaml vditor-linenumber small-scroll-bar overflow-y-auto' style={{ maxHeight: '698px' }}>
                      <span className='hljs-number'>1</span>
                      <span className='hljs-string'>.客户端生成密钥对</span>
                      <span className='hljs-number'>2</span>
                      <span className='hljs-string'>.将客户端的公钥写入服务器的密钥验证文件</span>
                      <span className='hljs-number'>3</span>
                      <span className='hljs-string'>.客户端请求登录，服务器生成一段随机字符串，并使用客户端公钥加密后发送给客户端</span>
                      <span className='hljs-number'>4</span>
                      <span className='hljs-string'>.客户端使用自己的私钥解密，并返回解密后的信息到服务器</span>
                      <span className='hljs-number'>5</span>
                      <span className='hljs-string'>.服务器进行信息对比，如果结果匹配，则允许登录</span>
                      <div className='vditor-linenumber__temp' style={{ display: 'none' }}></div>
                      {/* <span className='vditor-linenumber__rows'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span> */}
                    </code>
                  </pre>
                  <h2>SSH公钥登陆</h2>
                  <h3>生成秘钥</h3>
                  <p>生成秘钥，Windows/Linux通用：</p>
                  <pre>
                    <div className='vditor-copy'>
                      <textarea></textarea>
                      <span className='vditor-tooltipped vditor-tooltipped__w'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-clipboard"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                          <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        </svg>
                      </span>
                    </div>
                    <code className='lang-shell hljs vditor-linenumber small-scroll-bar overflow-y-auto' style={{ maxHeight: '698px' }}>
                      <span className='hljs-meta'>#</span>
                      <span className='bash'> -t：指定秘钥类型，不指定默认为RSA</span>
                      <span className='hljs-meta'>#</span>
                      <span className='bash'> -C：注释，可以不用设置，主要用于识别秘钥，可以写邮箱、用户名等信息</span>
                      <span className='hljs-meta'>#</span>
                      <span className='bash'> -b：秘钥长度，默认2048位，一般不用设置</span>
                      ssh-keygen -t rsa -C "www.guitu18.com"
                      <div className='vditor-linenumber__temp' style={{ display: 'none' }}></div>
                      {/* <span className='vditor-linenumber__rows'>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </span> */}
                    </code>
                  </pre>
                  <p>以Windows演示（Linux是一样的），这里会有三次确认输入，第一个是设置秘钥保存的路径，第二个和第三个是设置秘钥的密码。默认秘钥保存路径不用修改，如果不设置密码直接按三次Enter即可。</p>
                </div>
              </div>
            </article>
          </div>
          {/* 上一篇&下一篇 */}
          <nav className='m-t-lg m-b-lg'>
            <ul className='pager'>
              <li className='next'>
                <a className='box-shadow-wrap-normal' data-toggle="tooltip" data-original-title="MongoDB常用查询语法及与MySQL对比示例">下一篇</a>
              </li>
            </ul>
          </nav>
          {/* 评论 */}
          <div id='comments' click_status="true">
            <div id='respond-post-59' className='respond comment-respond no-borders'>
              <h4 id='reply-title' className='comment-reply-title m-t-lg m-b'>
                发表评论&nbsp;
                <small>
                  <i className="glyphicon glyphicon-info-sign" data-toggle="tooltip" data-placement="right" title="" data-original-title="使用cookie技术保留您的个人信息以便您下次快速评论，继续评论表示您已同意该条款"></i>
                </small>
              </h4>
              <form id='comment_form' className='comment-form'>
                <input type="hidden" name="receiveMail" id="receiveMail" value="yes" />
                <div className='comment-form-comment form-group'>
                  <label className='padder-v-sm'>
                    评论
                    <span className="required text-danger">*</span>
                  </label>
                  <textarea id='comment' className='textarea form-control OwO-textarea' name='text' rows="5" placeholder="说点什么吧……"></textarea>
                  <div className='OwO padder-v-sm'>
                    <div className='OwO-logo padder-v-sm'>
                      <span className='smile-icons'>
                        <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1">
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                          <line x1="9" y1="9" x2="9.01" y2="9"></line>
                          <line x1="15" y1="9" x2="15.01" y2="9"></line>
                        </svg>
                      </span>
                      <span className="OwOlogotext">表情</span>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
