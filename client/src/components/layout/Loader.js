import React from 'react';
import loading from '../../images/preloader.gif'
import styled from 'styled-components';
const Loader = () => {
    return (
        <Preloader>
            <Image src={loading} alt="Loading..."/>
        </Preloader>
    )
}
export default Loader;
const Preloader = styled.div`   
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);    
    
`;
const Image = styled.img`
    width: 30em;
    height: 30em;
`;