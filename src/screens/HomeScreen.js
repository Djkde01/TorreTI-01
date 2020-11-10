import React from 'react';

export default function HomeScreen(){
    return(
        <main className="HomeScreen">
            <div>
                <h1>Welcome to the Torre Match Application!</h1>
                <h3>See if your profile fits with these dream job</h3>
            </div>
            <a href="/profiles" className="home-button">Search profiles</a>
            <div>
                <p>If you don't have a profile</p>
                <a href="https://torre.co">Create one here!</a>
            </div>
        </main>
    )
}