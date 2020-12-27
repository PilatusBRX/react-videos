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

 const initialState = {
     videos: null,
     current: null,
     loading: false,
     error: null
 }   

 const videoReducer =   (state = initialState, action) => {
    switch (action.type) {

    case GET_VIDEOS:
        return{
            ...state,
            videos: action.payload,
            loading: false
        }
        
    case ADD_VIDEO:
        return{
            ...state,
            videos: [ action.payload,...state.videos],
            loading: false
        }
    case DELETE_VIDEO:
        return{
            ...state,
            videos: state.videos.filter(video => 
            video.id !== action.payload),
            loading: false              
        }
    case UPDATE_VIDEO:
        return{
            ...state,
            videos: state.videos.map(video => 
                video.id === action.payload.id ? action.payload : video),
            loading: false              
        }

        case SEARCH_VIDEOS:
            return{
                ...state,
                videos: action.payload
            }
        case SET_CURRENT:
            return{
                ...state,
                current: action.payload
            }
        case CLEAR_CURRENT:
            return{
                ...state,
                current: null
            }

            case SET_LOADING:
                return{
                    ...state,
                    loading: true
                }

            case VIDEOS_ERROR:
                console.error(action.payload);
                return{
                    ...state,
                    error: action.payload
                }    

        default:
            return state;   


    }

 }
 export default videoReducer 