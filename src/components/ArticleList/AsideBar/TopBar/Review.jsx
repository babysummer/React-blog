import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import '../../ArticleList.css'
import reviewImg1 from './images/review1.jpg'
import reviewImg2 from './images/review2.jpg'
import reviewImg3 from './images/review3.jpeg'
import reviewImg4 from './images/review4.png'

export default class Review extends Component {
    render() {
        return (
            <div id='widget-tabs-4-comments' className='tab-pane fade wrapper-md no-js-show'>
                <h5 className='widget-title m-t-none text-md'>最新评论</h5>
                <ul className='list-group no-borders pull-in auto m-b-none no-bg'>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm avatar m-r'>
                            <img nogallery="" src={reviewImg1} className='img-40px photo img-square normal-shadow' />
                        </a>
                        <a href='#!' className='text-muted'></a>
                        <div className='clear'>
                            <div className='text-ellipsis'>
                                <a title='joe'>joe</a>
                            </div>
                            <small className='text-muted'>
                                <span>2022.2.24</span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm avatar m-r'>
                            <img nogallery="" src={reviewImg2} className='img-40px photo img-square normal-shadow' />
                        </a>
                        <a href='#!' className='text-muted'></a>
                        <div className='clear'>
                            <div className='text-ellipsis'>
                                <a title='防水涂料加盟'>防水涂料加盟</a>
                            </div>
                            <small className='text-muted'>
                                <span>感谢分享 赞一个</span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm avatar m-r'>
                            <img nogallery="" src={reviewImg3} className='img-40px photo img-square normal-shadow' />
                        </a>
                        <a href='#!' className='text-muted'></a>
                        <div className='clear'>
                            <div className='text-ellipsis'>
                                <a title='黑桃三'>黑桃三</a>
                            </div>
                            <small className='text-muted'>
                                <span>你好陌生人，虫洞穿越而来</span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm avatar m-r'>
                            <img nogallery="" src={reviewImg4} className='img-40px photo img-square normal-shadow' />
                        </a>
                        <a href='#!' className='text-muted'></a>
                        <div className='clear'>
                            <div className='text-ellipsis'>
                                <a title='Teacher Du'>Teacher Du</a>
                            </div>
                            <small className='text-muted'>
                                <span>都是些口水文，固定发布频率，对搜索引擎较友善！</span>
                            </small>
                        </div>
                    </li>
                    <li className='list-group-item'>
                        <a href='#!' className='pull-left thumb-sm avatar m-r'>
                            <img nogallery="" src={reviewImg4} className='img-40px photo img-square normal-shadow' />
                        </a>
                        <a href='#!' className='text-muted'></a>
                        <div className='clear'>
                            <div className='text-ellipsis'>
                                <a title='Teacher Du'>Teacher Du</a>
                            </div>
                            <small className='text-muted'>
                                <span>十年之约-虫洞穿梭而来，学习到了！</span>
                            </small>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
