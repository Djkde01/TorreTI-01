import React from 'react';
import {Link} from 'react-router-dom';

import Cookies from 'js-cookie'

import Picture from '../components/Picture';

export default function JobMatch(){
    const percentage = Math.floor(Math.random()*100)
    return(
        <main>
            <div className="match-images">
                <Picture imageUrl={Cookies.get('userPicture')}/>
                <Picture imageUrl={Cookies.get('jobImage')}/>
            </div>
            <div className="match-info">
                <h4>{Cookies.get('userID')} has</h4>
                {
                    percentage > 70 ?
                    <h1 className="success">{percentage}%</h1>:
                    percentage > 40 ?
                    <h1 className="average">{percentage}%</h1>:
                    <h1 className="danger">{percentage}%</h1>
                }
                <h4>Match with this job</h4>
                <Link to="/jobs">Try with another job</Link>
            </div>

        </main>
    )
}