import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom"
import { useState } from "react";
import callApi from "./utils/axios";
import * as msg from './utils/notifications';

const Login = () =>{

    const [loading, setLoading] = useState(false)

    const login = async (userObj) => {
        setLoading(true)
        const data = await callApi('login', 'post', userObj);
        setLoading(false);
        if (data) {
            msg.s('Login successfully.')
            window.location.href = `/`;
        }
    }

    return(
        <>
            <div className="_signUp_page">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-5 col-lg-5 _pad_r_0">
                        <div className="_sign_all_lft">
                            <div  className="_sign_all_lft_logo">
                                <a href="">
                                </a>
                            </div>
                            <div className="_sign_all_img">
                                <img  src="/img/sign1.png" />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-7 col-md-7 _pad_l_0">
                        <div className="_sign_r8_all">
                            <div className="_sign_r8_main">
                                <div className="_sign_r8_main_top">
                                    <h1>Welcome to Social App</h1>
                                    <p>Let’s sign up first . </p>
                                </div>

                                <div className="_sign_r8_sngl_all">
                                    <Form onFinish={login}>
                                        <div className="_sign_r8_sngl">
                                            <p>Email</p>
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    { required: true, message:'Email is required.' },
                                                    { type: 'email', message:'Please input valid email.' },
                                                ]}
                                            >
                                                <Input type="text" placeholder="Email" />
                                            </Form.Item>
                                        </div>

                                        <div className="_sign_r8_sngl">
                                            <p>Password</p>
                                            <Form.Item
                                                name="password"
                                                rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your password!',
                                                },
                                                {
                                                    min: 6,
                                                    message: 'Please input at least 6 characters!',
                                                },
                                                ]}
                                                hasFeedback
                                            >
                                                <Input.Password placeholder="Password"/>
                                            </Form.Item>

                                        </div>

                                        <Form.Item>
                                            <div className="_sign_r8_btn">
                                                <Button disabled={loading} htmlType="submit" type="_btn1">{loading ? 'Please wait...' :'Sign In'}</Button>
                                            </div>
                                        </Form.Item>

                                    </Form>
                                    <div className="_signUp_card_btm">
                                        <div className="_signUp_card_acnt _dis_flex _dis_flex_cntr1">
                                            <p>Don't have an account?</p>
                                            <Link style={{marginTop: "-16px"}} to="/signup">Sign Up</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
