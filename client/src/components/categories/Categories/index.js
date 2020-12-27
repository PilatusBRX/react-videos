import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import AddCategory from '../AddCategory'; 
import Loader from '../../layout/Loader';
import {getCategories} from '../../../redux/actions/categoryActions';  
import Category from '../Category'
import {
SubTitle,
List
} from './style';

const Categories = () => { 
  
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
      <>
      <div className="container">
          <AddCategory /> 
          <List>
            {!loading && categories.length === 0 ? (
              <SubTitle>Não há categorias para exibir...</SubTitle>) : (           
              categories.map((category) => {
                  return(
                  <Category key={category.id} category={category} />
                  )
              }))}
          </List>               
    </div>
    </>        
  )
}

export default Categories;


