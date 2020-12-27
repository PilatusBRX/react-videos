import {
GET_CATEGORIES,
ADD_CATEGORY,
DELETE_CATEGORY,
CATEGORIES_ERROR,
SET_LOADING
 } from '../constants/types';
import axios from 'axios';
import {baseUrl} from '../constants/url';
    
//get categories
export const getCategories = () => async dispatch => {
    try {
        setLoading();
        const { data } = await axios.get(`${baseUrl}/categories`);
        dispatch({
            type: GET_CATEGORIES,
            payload: data
        })
    } catch (err) {
        dispatch({
            type: CATEGORIES_ERROR,
            payload: err.message.statusText
        })
    }
}
//Add category
export const addCategory = (category) => async dispatch =>{
        try {   
            setLoading();
            const { data} = await axios.post(`${baseUrl}/categories`, category);
            dispatch({
                type: ADD_CATEGORY,
                payload: data
            })
            
        } catch (err) {
            dispatch({
                type: CATEGORIES_ERROR,
                payload: err.message.statusText
            })
        }
    }
    //Delete Categoru
    export const deleteCategory = (id) => async dispatch =>{
        try {
            setLoading();
            await axios.delete(`${baseUrl}/categories/${id}`);
            dispatch({
                type: DELETE_CATEGORY,
                payload: id
            })
        } catch (err) {
            dispatch({
                type: CATEGORIES_ERROR,
                payload: err.message.statusText
            })
        }
    }  
    
    //loading loading
    export const setLoading = () => async dispatch =>{
        return{ 
            type: SET_LOADING
        }
    }