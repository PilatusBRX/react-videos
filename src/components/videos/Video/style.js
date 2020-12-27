
import styled from 'styled-components';

export const SingleVideo = styled.div`
overflow: hidden;
margin-bottom: 2em; 
position: relative; 
cursor: pointer;   

`;
export const Overlay = styled.div`
visibility: hidden;
top: 40%;
left: 50%;
transform: translate(-50%, -40%);
position: absolute;
font-size: 8em;
color: rgba(255, 255, 255, .75);
transition: all ease-in-out .2s;    
`;


export const Info = styled.div`
 background-color: #2A2B2C;
 color: #ffffff;
 padding: 1em;  
 width: 100%; 
 position: relative; 
 top: -1em;     
`;

export const VideoTitle = styled.h3`
text-align: left;
font-size: 1.6em;
margin-bottom: .5em;
`;

export const Category = styled.h5`
font-size: 1.2em;
position: absolute;
color: #ffffff;
padding: .75em;
border-radius: 2px;
display: block;
background-color: rgba(0,0,0,.855);
`;
export const Date = styled.p`
font-size: 1.2em;
text-align: left;
`;

export const Image = styled.img`
height: 22em;
object-fit: cover;

`;
