import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addCategory} from '../../../redux/actions/categoryActions';
import { Link } from "react-router-dom";
import {AiOutlineArrowLeft } from 'react-icons/ai';

import {
Title,
Form,
Input,
Button,
Back,
Message
 } from './style';

const AddCategory = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState(""); 
    const [message, setMessage] = useState('');  
   

    const onSubmit = e => {
      e.preventDefault();
      if(name === ""){
        setMessage('Por favor, adicione uma categoria')
      }else{
        const newCategory = {
         name        
      }
      dispatch(addCategory(newCategory));          
      setName('');     
      }   
              
    }

    return (
        <>
        <Link to="/">            
            <Back><AiOutlineArrowLeft /></Back>
        </Link>
      
        <Title>Adicione uma categoria</Title> 
        <Message>{message}</Message>       
       
        <Form  onSubmit={onSubmit}>
            <Input           
             type="text"
              placeholder="Nome da categoria..."
              value={name}
              name="name"
              onChange={e => setName(e.target.value)}
              />
                     
            <Button type="submit">Adionar Categoria</Button>
        </Form>
        </>
    )
}

export default AddCategory;

