import React from 'react';

export default function Picture(props){
    return(
        <div className="hexagon">
            <div className="hexagon-in1">
                <div className="hexagon-in2">
                    <img src={props.imageUrl} alt="User profile"/>
                </div>
            </div>
        </div>
    )
}