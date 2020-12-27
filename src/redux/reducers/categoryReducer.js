import {
    GET_CATEGORIES,
    ADD_CATEGORY,
    SET_LOADING,
    DELETE_CATEGORY,
    CATEGORIES_ERROR
    } from '../constants/types';

 const initialState = {
     categories: null,    
     loading: false,
     error: null
 }  

 export default  (state = initialState, action) => {
     
    switch(action.type){
   case GET_CATEGORIES:
        return{
            ...state,
            categories: action.payload,
            loading: false
        }

        
    case ADD_CATEGORY:
        return{
            ...state,
            categories: [...state.categories, action.payload],
            loading: false
        }
    case DELETE_CATEGORY:
        return{
            ...state,
            categories: state.categories.filter(category => 
                category.id !== action.payload),
            loading: false              
        }     
    case SET_LOADING:
        return{
            ...state,
            loading: true
        }

    case CATEGORIES_ERROR:
        console.error(action.payload);
        return{
            ...state,
            error: action.payload,
            loading: false
        }    

    default:
        return state;   


    }//switch

 }//this is the end
