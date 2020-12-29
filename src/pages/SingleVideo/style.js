import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
    font-weight: 900;
    letter-spacing: 1.5px;
    margin: 2em 0;
    text-transform: uppercase;
    @media (max-width: 720px) {
         font-size: 22px; 
         padding-top: 30px;     
    }
`;

export const VideoScreen = styled.div`
overflow: hidden;
margin-bottom: 2em; 
position: relative; 
cursor: pointer;   
`;
 export const Info = styled.div`
 background-color: #4D4B4F;
 color: #ffffff;
 padding: 1.75em;  
 width: 100%; 
 display: flex;
 flex-direction: row; 
 height: 100%;    
 align-items: center;
 @media (max-width: 720px) {
    padding: .25em;
    
}    
`;

export const Category = styled.h5`
font-size: 1.4em;    
color: #ffffff;
margin: 0 15px; 
background-color: rgba(255, 255, 255, .15);
padding: .5em 1.5em;
border-radius: 3px; 
@media (max-width: 720px) {
    padding: .5em;
    margin: 0 5px; 
    background-color: transparent;
    font-size: 1.5em; 
}

`;
export const Date = styled.p`
font-size: 1.5em;
text-align: left;
margin: 0 3em; 
@media (max-width: 720px) {
 font-size: 1.2em;
 margin: 1em .25em;  
} 
`;

export const Back = styled.div`  
color: #9D9B9B;
font-size: 3.2em;
position: absolute;
top: 2.25em;
`;

export const Sinopse = styled.p`  
padding:  2.5em;
font-size: 1.8em;
color: #9E9C9F;
line-height: 1.6em;
font-weight: 500;
letter-spacing: 2px;
@media (max-width: 720px) {
    font-size: 1.4em; 
    padding: 1em 0;
    text-align: justify; 
}
`;
export const Actions = styled.div` 
display: flex;
flex-direction: row; 
align-items: center;
background-color: rgba(255, 255, 255, .15);
border-radius: 3px;
position: absolute;
top: 5.75em;
left: 97.5%;
transform: translate(-97.5%, 5.75em);
padding: .2em 1.5em;
@media (max-width: 959px) {
    display: none;            
}
`;
export const Trash = styled.div` 
color: #ebebeb;
font-size: 1.6em;
margin: 0 .55em;
transition: all ease-in-out .4s;
&:hover{
    color: crimson;
}
`;
export const Edit = styled.div` 
color: #ebebeb;
font-size: 2.4em;
margin: 0 .55em;
transition: all ease-in-out .4s;
&:hover{
    color: #3469aa;
}
`;
