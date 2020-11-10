import React from 'react';
import {Link} from 'react-router-dom';

export default function Header(){
    return(
        <header>
            <Link to="/">
                <img src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/teletrabajo/torre.png" alt="Torre Logo"/>
            </Link>
            <h4>Torre Job Matcher</h4>
        </header>
    )
}