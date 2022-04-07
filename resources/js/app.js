require('./bootstrap');
import React, {StrictMode} from 'react'
import ReactDom from 'react-dom'
import Routes from './routes'
import 'antd/dist/antd.css'
import { Provider } from "react-redux";
import store from "./component/redux/store";

export default function App(){
    return (
        // <StrictMode>
            <Provider store={store}>
            <Routes></Routes>
            </Provider>
        // </StrictMode>
    );
}

ReactDom.render(<App/>,document.getElementById('root'))
