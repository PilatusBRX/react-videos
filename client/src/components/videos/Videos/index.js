import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import Loader from '../../layout/Loader';
import Video from '../Video'; 
import FilterVideos from '../FilterVideos';
import {getVideos} from '../../../redux/actions/videoActions';   
import {
Title,
SubTitle,
Button
} from './style';

const Videos = () => {  
    const [visible, setVisible] = useState(4);
    const showMoreVideos = () => {
        setVisible((prevValue) => prevValue + 4);
      }
      const dispatch = useDispatch();
      const videoList = useSelector(state => state.videoList);
      const { videos, loading} = videoList;

    useEffect(() => {     
        dispatch(getVideos()); 
        // eslint-disable-next-line      
    }, []);     

    if (loading || videos === null) {
        return <Loader />;
      }

    return (
        <div className="container">
            { videos.length >= 1 && <Title>Minha lista de vídeos</Title>}
            {/* <FilterVideos/> */}
          <div className="row">  
            {!loading && videos.length === 0 ? (
              <SubTitle>Não há vídeos para exibir...</SubTitle>) : (           
              videos.slice(0, visible).map((video) => {
                  return(
                  <Video key={video.id} video={video} />
                  )
              }))}
              { videos.length >= 4 && <Button onClick={showMoreVideos}>Mais vídeos</Button> }            
       </div>
    </div>        
  )
}



export default Videos;

