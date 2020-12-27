import {
GET_VIDEOS,
ADD_VIDEO,
DELETE_VIDEO,
SET_CURRENT,
CLEAR_CURRENT,
UPDATE_VIDEO,
SET_LOADING,
VIDEOS_ERROR,
SEARCH_VIDEOS
} from '../constants/types';
import axios from 'axios';
import {baseUrl} from '../constants/url';


export const getVideos = () => async dispatch => {
    try {
        setLoading();
        const { data } = await axios.get(`${baseUrl}/videos`);
        dispatch({
            type: GET_VIDEOS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: VIDEOS_ERROR,
            payload: err.message.statusText
        })
    }
}

//Add video
export const addVideo = (video) => async dispatch =>{
    try {   
        setLoading();
        const {data} = await axios.post(`${baseUrl}/videos`, video);
        dispatch({
            type: ADD_VIDEO,
            payload: data
        })
        
    } catch (err) {
        dispatch({
            type: VIDEOS_ERROR,
            payload: err.message.statusText
        })
    }
}
//Delete Video
export const deleteVideo = (id) => async dispatch =>{
    try {
        setLoading();
        await axios.delete(`${baseUrl}/videos/${id}`);
        dispatch({
            type: DELETE_VIDEO,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: VIDEOS_ERROR,
            payload: err.response.statusText

        })  
    }
}
//Update Video
export const updateVideo = (video) => async dispatch =>{
    try {
        setLoading();
        await axios.put(`${baseUrl}/videos/${video.id}`, video);
        dispatch({
            type: UPDATE_VIDEO,
            payload: video
        })
    } catch (err) {
        dispatch({
            type: VIDEOS_ERROR,
            payload: err.response.statusText

        })
    }
}

//Search Video
export const searchVideos = (text) => async dispatch =>{
    try {
        setLoading();
        const res = await fetch(`${baseUrl}/videos?q=${text}`);
        const data = await res.json();
        dispatch({
            type: SEARCH_VIDEOS,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: VIDEOS_ERROR,
            payload: err.response.statusText

        })
    }
}
//SetCurrent video
export const setCurrent = video => {
    return{
        type: SET_CURRENT,
       payload: video
    }
}
//clear current video
export const clearCurrent = () =>{
    return{
        type: CLEAR_CURRENT
    }
}

//loading loading
export const setLoading = () => async dispatch =>{
    return{ 
        type: SET_LOADING
    }
}