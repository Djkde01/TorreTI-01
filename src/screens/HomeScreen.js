import React from 'react';

import Cookies from 'js-cookie'
import {Link} from 'react-router-dom';

export default function HomeScreen(){
    const userExists = Cookies.get('userID')
    return(
        <main className="HomeScreen">
            <div>
                <h1>Welcome to the Torre Match Application!</h1>
                <h3>See if your profile fits with these dream job</h3>
            </div>
            {
                userExists ?
                <Link to="/jobs" className="home-button">Search jobs</Link> :
                <Link to="/profiles" className="home-button">Search profiles</Link>
            }
            <div>
                <p>If you don't have a profile</p>
                <a href="https://torre.co">Create one here!</a>
            </div>
        </main>
    )
}