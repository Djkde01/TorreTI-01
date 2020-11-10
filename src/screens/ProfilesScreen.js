import React from 'react';
import {useEffect, useState} from 'react';

import axios from 'axios';

import Profile from '../components/Profile';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfilesScreen(){
    const [profiles, setProfiles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setLoading(true);
                const { data } = await axios.post('https://search.torre.co/people/_search/?offset=0&size=10');
                setLoading(false);
                setProfiles(data.results);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        };
        fetchData();
    },[]);
    return(
        <main>
            {loading ? 

            <LoadingBox/> : 
            error ? 
            <MessageBox variant="danger">{error}</MessageBox> :
            <div className="row center">
                <h3>Please select your profile</h3>
                {
                    profiles.map((profile) =>(
                        <Profile key={profile.subjectID} profile={profile} />
                    )
                    )
                }
            </div>
            }
        </main>
    )
}