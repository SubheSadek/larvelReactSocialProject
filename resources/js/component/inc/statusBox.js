import { Input } from "antd";
import { Link } from "react-router-dom";
import { useState } from "react";
import { CloseOutlined } from '@ant-design/icons';
import callApi from "../utils/axios";
import * as msg from '../utils/notifications';
import { useDispatch } from "react-redux";
import {addFeed} from '../redux/feed';

function StatusBox () {
    const [statusBox, setStatusBox] = useState(false);
    const [loading, setLoading] = useState(false);
    const [textarea, setTextarea] = useState('');
    const dispatch = useDispatch();

    const clickStatusbox = () => {
        setStatusBox((prevCheck) => !prevCheck);
    }

    const createFeed = async() => {

        if(textarea.length < 1){
            msg.i('Please input your status.');
            return;
        }

        setLoading(true)
        const data = await callApi('feed/createFeed', 'post', { feed_text:textarea });
        setLoading(false);

        if (data) {
            dispatch(addFeed(data));
            msg.s('Feed created successfully.')
            setStatusBox(false);
            setTextarea('');
        }
    }

    return (
        <>
            <span>
                <div className={statusBox ? '_statusBox_open _statusBox _mar_b20' : '_card1 _box_shdw2 _mar_b30 _statusBox'}>
                    <div className="_card1_top _dis_flex _dis_flex_cntr1">
                        <Link to="#" className="_card1_top_img _mar_r10">
                            <img src="/img/man.jpg" alt="image" />
                        </Link>
                        <Link to="#" className="_titl1">{window.authUser.name}</Link>

                    </div>

                    <div className="_card1_inpt">
                        <input onClick={clickStatusbox} readOnly type="text" placeholder="What's on your mind ?" />
                    </div>

                    <div className="_statusBox_main_all">
                        <div className="_statusBox_main _padd">
                            <p className="_statusBox_close" onClick={clickStatusbox}><CloseOutlined/> </p>
                            <div className="_statusBox_textarea">
                                <textarea value={textarea} onChange={(e) => setTextarea(e.target.value)} type="text" placeholder="What's on your mind or financial story?" className="_statusBox_textarea_text"></textarea>
                            </div>
                        </div>
                        <div className="_statusBox_main_bottom">
                            <button type="button" className="_btn1 _btn_long" onClick={createFeed}>
                                <span className="_btn1_text">Post Story</span>
                            </button>
                        </div>
                    </div>

                </div>
            </span>


        </>
    )
}

export default StatusBox;
