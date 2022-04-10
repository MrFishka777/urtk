import React, {useEffect, useState} from 'react';
import './css/style.css';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/nucleo-icons.css';
import './assets/css/nucleo-svg.css';
import './assets/css/soft-ui-dashboard.css';
import {Route, Routes} from "react-router-dom";
import Main from "./pages/Main";
import Schedules from "./pages/Schedules";


function App() {


    return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/:group" element={<Schedules/>} />
        </Routes>
    </div>
  );
}

export default App;
