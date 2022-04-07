
import { useEffect } from "react"
import App from './index'
import callApi from "./utils/axios"

const  Main = () => {


    useEffect(() => {
        if(!window.authUser){
            window.location.href = "/login"
        }
    } , [])

    async function logout(){
        //confirm logout
        const confirm = window.confirm('Are you sure, you want to logout?');
        if(!confirm){
            return;
        }
        const data = await callApi('logout', 'get');
        if(data){
            window.location.href = "/login"
        }
    }
    return (
        <>
            {window.authUser  && <div id="app">
                <div id="main-wrapper">

                <div  className="_menu">
                    <div className="container">
                    <div className="_menu_inner  _dis_flex _dis_flex_cntr1">

                        <div className="_menu_logo">
                            <h5>Social App</h5>
                        </div>

                        <div className="_menu_r8">
                            <p onClick={() => logout()} style={{color: "red", fontWeight: "bold",cursor: "pointer"}}>Logout</p>
                        </div>

                    </div>
                    </div>
                </div>

                <div className="_main_layout">
                    <App />
                </div>

                </div>
            </div>}
        </>
    )
}

export default Main;
