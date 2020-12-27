import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addVideo} from '../../../redux/actions/videoActions';
import { Link } from "react-router-dom";
import {  AiOutlineArrowLeft } from 'react-icons/ai';
import CategoryOption from '../../categories/CategoryOptions';

import {
Title,
Form,
Input,
Select,
Textarea,
Button,
Back,
Message
 } from './style';

const AddVideo = ({ history}) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [rating, setRating] = useState(1);
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [message, setMessage] = useState('');  

    const onSubmit = e => {
      e.preventDefault();
      
    if(rating === "" || title === "" || url === "" || thumbnail === "" || description === "" || category === ""){
      setMessage("Por favor, preencha todos os campos!");
    }else if(rating > 5 || rating < 1){
      setMessage("A nota tem que está entre 1 e 5!");
    } else{
      const newVideo = {
        title,
        url,
        rating,
        thumbnail,
        description,
        category,
        date: new Date()
    }
    dispatch(addVideo(newVideo));          
        history.push('/');     
    }  
            
}

    return (
        <div className="container">
        <Link to="/">            
            <Back><AiOutlineArrowLeft /></Back>
        </Link>      
        <Title>Adicione um vídeo</Title>        
           <Message> {message}</Message>
        <Form  onSubmit={onSubmit}>       
            <Input       
             type="text"
              placeholder="Título..."
              value={title}
              name="title"
              onChange={e => setTitle(e.target.value)}
              />
            <Select                        
              name='category'
              value={category}           
              onChange={e => setCategory(e.target.value)}
            >
               <option value='' disabled>
                   Selecione uma categoria
              </option>
              <CategoryOption/>      
             
            </Select>
            <Input          
             type="number"
              placeholder="A nota tem que está entre 1 e 5. Exemplo: 5,4.5, 3.9..."
              value={rating}
              name="rating"
              onChange={e => setRating(e.target.value.replace(',', '.'))}             
              />
            <Input          
             type="text"
              placeholder="URL da imagem..."
              value={thumbnail}
              name="thumbnail"
              onChange={e => setThumbnail(e.target.value)}
              />
            <Input           
             type="text"
              placeholder="URL do vídeo..."
              value={url}
              name="url"
              onChange={e => setUrl(e.target.value)}
              />
           <Textarea       
            placeholder="Sinopse do vídeo..."
            value={description}
            name="description"
            onChange={e => setDescription(e.target.value)}
            />
            <Button type="submit">Adionar vídeo</Button>
        </Form>
        </div>
    )
}

export default AddVideo;

