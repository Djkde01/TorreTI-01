import React from 'react';

import Cookies from 'js-cookie'

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
                <a href="/jobs" className="home-button">Search jobs</a> :
                <a href="/profiles" className="home-button">Search profiles</a>
            }
            <div>
                <p>If you don't have a profile</p>
                <a href="https://torre.co">Create one here!</a>
            </div>
        </main>
    )
}