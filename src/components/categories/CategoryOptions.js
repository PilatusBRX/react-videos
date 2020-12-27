import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../components/layout/Loader';
import {getCategories} from '../../redux/actions/categoryActions'; 

const CategoryOptions = () => {
const dispatch = useDispatch();
const categoryList = useSelector(state => state.categoryList);
const { categories, loading} = categoryList; 

  useEffect(() => {     
        dispatch(getCategories()); 
        // eslint-disable-next-line           
    }, []);  

    if (loading || categories === null) {
        return <Loader />;
      }

 return (
   
    !loading &&
    categories !== null &&
    categories.map(cat => (
      <option key={cat.id} value={`${cat.name}`}>
         {cat.name}         
      </option>
    ))
  );
}

export default CategoryOptions
