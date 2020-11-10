import React, { useEffect, useState } from 'react';

import Cookies from 'js-cookie'
import axios from 'axios'

import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Job from '../components/Job';

export default function JobsScreen(){
    const user = Cookies.get('userID');
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(()=>{
        const fetchData = async()=>{
            try {
                setLoading(true);
                const { data } = await axios.post("https://search.torre.co/opportunities/_search/?offset=0&size=10");
                setLoading(false);
                setJobs(data.results);
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
                <h1>Welcome back {user}!</h1>
                <h3>Here are some jobs for you</h3>
                {
                    jobs.map((job,i) =>(
                        <Job key={i} profile={job} index={i} />
                    )
                    )
                }
                
            </div>
            }
        </main>
    )
}