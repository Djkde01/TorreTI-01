import React from 'react';
import {Link} from 'react-router-dom';

import Cookies from 'js-cookie'

import Picture from './Picture';

export default function Job(props){
    const {profile} = props;
    const handleClick = () =>{
        Cookies.set('jobImage', profile.organizations[0].picture);
    }
    const isCompensated = profile.compensation.data;
    return(
        <div key={profile.index} className="card">
            <Picture imageUrl={profile.organizations[0].picture}/>
            <div>
                <h4>{profile.objective}</h4>
                {
                    isCompensated ?
                    <h5>{profile.compensation.data.currency} {profile.compensation.data.minAmount}-{profile.compensation.data.maxAmount} / {profile.compensation.data.periodicity}</h5>:
                    <h5>No compensation info available</h5>
                }
                <p>{profile.organizations[0].name}</p>
            </div>
            <Link to="/match">
            <button onClick={handleClick}>See Job Match</button>
            </Link>

        </div>
    )
}