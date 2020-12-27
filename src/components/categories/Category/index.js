import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteCategory} from '../../../redux/actions/categoryActions'; 
import { FaTrash } from 'react-icons/fa';
import {Item, Close} from './style';

function Category({category}) {
    const dispatch = useDispatch();
        // onDelete
    const onDelete = () => {
        dispatch(deleteCategory(category.id));                    
    };

    return (
          <Item>
              {category.name}
              <Close  onClick={onDelete}><FaTrash/></Close>
        </Item>
    )
}

export default Category
