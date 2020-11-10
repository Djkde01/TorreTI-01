import React from 'react';
import Picture from './Picture';

export default function Profile(props){
    const {profile} = props;
    return(
        <div key={profile.subjectId} className="card">
            <Picture imageUrl={profile.picture}/>
            <div>
                <h4>{profile.name}</h4>
                <p>{profile.professionalHeadline}</p>
            </div>

        </div>
    )
}