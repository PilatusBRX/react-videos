import React, { useState, useEffect } from "react";
import moment from 'moment';
import 'moment/locale/pt-br';
import { Link } from "react-router-dom";
import axios from "axios";
import {useDispatch} from 'react-redux';
import { ImClock } from 'react-icons/im';
import { deleteVideo, setCurrent} from '../../redux/actions/videoActions';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { FaTrash } from 'react-icons/fa';
import { AiTwotoneEdit } from 'react-icons/ai';
import ReactPlayer from "react-player";
import Rating from '../../components/videos/Rating';
import {baseUrl} from '../../redux/constants/url';


import {
    VideoScreen,
    Back,
    Title,
    Info,
    Category,
    Date,
    Sinopse,
    Actions,
    Trash,   
    Edit

 } from './style';

const SingleVideo = ({ match, history }) => {

    const dispatch = useDispatch();
    const [ video, setVideo] = useState([]); 
  
    useEffect(() => {
        const fetchVideo = async () => {
          const { data } = await axios.get(           
            `${baseUrl}/videos/${match.params.id}`
          );    
          setVideo(data);
        };
        fetchVideo();
      }, [match]);

    // onDelete
    const onDelete = () => {
        dispatch(deleteVideo(video.id));         
        history.push("/");  
                
    };

    const onSetCurrent = () => {
        dispatch(setCurrent(video));
    }

    const formattedDate = moment(video.date)
    .locale('pt-br')
    .format('ddd, D [de] MMMM [de] YYYY');

  
    return (
        <>
        <VideoScreen className="col-lg-12">           
            <Link to="/">
                <Back><AiOutlineArrowLeft /></Back>
            </Link>           
            <Title>{video.title}</Title>                                         
            <ReactPlayer controls playing={true} url={video.url} className="video-player" width="100%" height="650px" />                                                       
            <Info className="info"> 
                <Category>{video.category}</Category>                                     
                <Date><ImClock /> {formattedDate}</Date>     
                <Rating value={video.rating}/>
            </Info> 
                <Sinopse>{video.description}</Sinopse> 
                <Actions>
                    <Trash onClick={onDelete}><FaTrash /></Trash>
                    <Link to={`/videos/edit/${video.id}`} onClick={onSetCurrent}><Edit><AiTwotoneEdit /></Edit></Link>                                  
                </Actions>                                                      
        </VideoScreen>      
                                     
     </>
    )
}


export default SingleVideo;

