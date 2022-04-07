
import StatusBox from "./inc/statusBox";
import { Link } from "react-router-dom";
import { DeleteOutlined } from '@ant-design/icons';
import {useEffect, useState} from 'react';
import callApi from "./utils/axios";
import { useDispatch, useSelector } from "react-redux";
import {allFeed, deleteSingleFeed} from '../component/redux/feed';
import * as msg from './utils/notifications';

const Main =() =>{
    const dispatch = useDispatch();
    const { feeds } = useSelector((state) => state.feed);

    useEffect(() => {
        const getFeed = async() => {
            const data = await callApi('feed/getFeed', 'get');
            if (data) {
                dispatch(allFeed(data));
            }
        }

        getFeed();

    } , [])

    const deleteFeed = async(id) => {
        const confirm = window.confirm('Are you sure, you want to delete this feed?');
        if(!confirm){
            return;
        }
        const data = await callApi('feed/deleteFeed', 'post', { feed_id: id });
        if(data){
            msg.s('Feed deleted successfully.');
            dispatch(deleteSingleFeed(id));
        }
    }

    return(
        <>
            <div className="_content">
                <div className="_index_page">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-2 col-lg-3">

                            </div>
                            <div className="col-12 col-md-6 col-lg-6">

                                <StatusBox/>

                                {feeds.length > 0 &&
                                    feeds.map((feed, index) => {
                                        return (
                                        <div className="_indx_post_all" key={feed.id}>

                                            <div className="_indx_post_card _box_shdw2  _mar_b20 _mar_t30">
                                                <div className="_indx_post_card_inner">
                                                        <div className="_indx_post_card_top _dis_flex">
                                                            <div className="_indx_post_card_top_lft">
                                                                <div className="_card1_top_img _mar_r10">
                                                                    <img src="/img/man.jpg" alt="image" />
                                                                </div>
                                                                <div className="_indx_post_card_top_titl">
                                                                    <Link to="/profile"><h4>{feed.user.name}</h4></Link>
                                                                    <p>{(new Date(feed.created_at)).toDateString()}</p>
                                                                </div>
                                                                <p onClick={() => deleteFeed(feed.id)} style={{marginLeft:'440px', cursor:'pointer'}}><DeleteOutlined /></p>
                                                            </div>
                                                        </div>

                                                        <div className="_indx_post_card_txt">
                                                            <p>{feed.feed_text}</p>
                                                        </div>
                                                </div>

                                                <div className="_indx_post_card_btm _dis_flex">
                                                </div>

                                            </div>
                                        </div>
                                        )
                                    })
                                }

                            </div>


                            <div className="col-12 col-md-4 col-lg-3">

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Main;
