import React from 'react';
import {Link} from 'react-router-dom';

import Cookies from 'js-cookie'

import Picture from './Picture';

export default function Profile(props){
    const {profile} = props;
    const handleClick = () =>{
        Cookies.set('userID', profile.username);
    }
    return(
        <div key={profile.index} className="card">
            <Picture imageUrl={profile.picture}/>
            <div>
                <h4>{profile.name}</h4>
                <p>{profile.professionalHeadline}</p>
            </div>
            <Link to="/jobs">
            <button onClick={handleClick}>Select Profile</button>
            </Link>

        </div>
    )
}