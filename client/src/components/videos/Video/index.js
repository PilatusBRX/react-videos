import React, {useState} from 'react';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Link } from "react-router-dom";
import { ImClock } from 'react-icons/im';
import { AiFillPlayCircle } from 'react-icons/ai';
import {
    SingleVideo,
    Category,
    Image,
    Info,
    VideoTitle,
    Date,
    Overlay
} from './style';


function Video({ video}) {
    const formattedDate = moment(video.date)
    .locale('pt-br')
    .fromNow();
    // .format('YYYY MM DD');
    

    return (
        <SingleVideo className="col-lg-3 col-md-6 col-sm-6 single-video"> 
            <Category>{video.category}</Category>                          
            <Image src={video.thumbnail} alt={video.title}/>                                                   
            <Info className="info"> 
                <VideoTitle>{video.title}</VideoTitle>    
                <Date><ImClock/> {formattedDate}</Date>
            </Info> 
           <Link to={`/video/${video.id}`}>
              <Overlay className="overlay"><AiFillPlayCircle/></Overlay>    
           </Link>                     
    </SingleVideo>
    )
}

export default Video;

