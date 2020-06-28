import React from 'react';
import { Button } from '../button';
import  VideoImage   from '../../assets/images/video';
import './style.css';

export interface IVideoProps {

}

const Video: React.FC<IVideoProps> = ({ }) => {
    return (
        <div className={"video-section-container"}>
            <div className={"video-data"}>
                <div className="title-container">
                    <p>Let's hear about Kayla'sucess story</p>
                </div>
                <div className="video-description-container">
                    <p>See how well  Alivio works in a real customer life.</p>
                </div>
                <Button label={"Let's get started"} height={48} width={172}></Button>
            </div>
            <div className="video-container">
                <VideoImage></VideoImage>
            </div>
        </div>
    );
}

export default Video;