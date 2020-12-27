import React, {useRef} from 'react';
import {useDispatch} from 'react-redux';
import { RiSearchLine, RiVideoAddFill } from 'react-icons/ri';
import { AiFillFolderAdd} from 'react-icons/ai';
import { Link } from "react-router-dom";
import logo from '../../../images/logo.svg';
import { searchVideos} from '../../../redux/actions/videoActions';
import './styles.css';

const  Header = () => {
    const text = useRef('');
    const dispatch = useDispatch();

    const onChange = e => {
    dispatch(searchVideos(text.current.value));

}

    return (               
        <header>
            <div className="container">
              <div className="row">
              <div className="logo col-lg-3 col-md-2 col-xs-12">
                   <Link to="/">
                      <img src={logo} alt=""/>
                   </Link>
                </div>
                <div className="searchForm col-lg-6 col-md-9 col-xs-12">
                    <form action="">
                        <input type="search"
                         placeholder="Que vídeo está procurando...?"
                        onChange={onChange}
                        ref={text}
                        id="search"                        
                        />
                        <RiSearchLine className="search-icon" />
                    </form>
                </div>               
                <div className="icon-container col-lg-3 col-md-6 col-xs-12">
                    <Link to="/videos/add-video" className="">
                        <RiVideoAddFill className="icon"/>
                    </Link>               
                    <Link to="/categories" className="">
                        <AiFillFolderAdd className="icon"/>
                    </Link>     
                </div>              
                           
              </div>
            </div>  
        </header>         
    
    )
}

export default Header
