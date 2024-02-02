import React from 'react';
import 'animate.css';

import {NavBar} from "./NavBar";
import { Banner } from "./Banner";
import { Footer } from "./Footer";

export const Home = () => {
    return(
        <div className="main">
            <NavBar/>
            <Banner/>
            <Footer/>
        </div>
    )
}
