import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateVideo} from '../../../redux/actions/videoActions';
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {
    Title,
    Form,
    Input,
    Select,
    Textarea,
    Button,
    Back
     } from './style';

const EditVideo = ({ history}) => {

    const dispatch = useDispatch();
    const list = useSelector(state => state.videoList);
    const {current} = list;

    const [title, setTitle] = useState("");
    const [url, setUrl] = useState("");
    const [rating, setRating] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");


    useEffect(() => {
        if(current){
            setTitle(current.title);
            setUrl(current.url);
            setRating(current.rating);
            setThumbnail(current.thumbnail);
            setDescription(current.description);
            setCategory(current.category);
        }
    }, [current]);      

    const onSubmit = e => {
        e.preventDefault();
        const upVideo = {
            id: current.id,
            title,
            url,
            rating,
            thumbnail,
            description,
            category,
            date: new Date()
        }
        dispatch(updateVideo(upVideo));          
        history.push('/');         
    }

    return (
        <>
        <Link to="/">            
            <Back><AiOutlineArrowLeft /></Back>
        </Link>
        <Title>Edite o vídeo</Title>
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
              <option value="" disable>
                   Selecione uma categoria
              </option>
              <option >
                   Tutorial
              </option>
              <option>
                 Documentário
              </option>
              <option>
                    Aventura
              </option>
              <option >
                      Comédia
              </option>
              <option>
                      Aventura
              </option>
              <option>
                      Música
              </option>
             
            </Select>
            <Input
             type="number"
              placeholder="Nota de 1 a 5. Exemplo: 4.5, 3.9..."
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
            <Button type="submit">Atualizar vídeo</Button>
        </Form>
        </>
    )
}

export default EditVideo;

