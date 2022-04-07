import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Login from './component/login';
import SignUp from './component/signup';
import Main from './component/main';

function Router(){
    return (
    <BrowserRouter>
        {!window.authUser && <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>}

        <Routes>
            <Route path="/" element={<Main />} />
        </Routes>
    </BrowserRouter>
    )
}

export default Router;
