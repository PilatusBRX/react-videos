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
export const SubTitle = styled.h2`
text-align: center;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
font-weight: 900;
letter-spacing: 1.5px;    
text-transform: uppercase;
font-size: 4.5em;
`;
export const Button = styled.button`
background-color: #2A2B2C;
border-radius: 4px;
color: #ffffff;
border: none;
padding: 1em 1.6em;
cursor: pointer;
font-size: 1.8em;
font-weight: 700;
margin: 0 auto;
margin-bottom: 2em; 
outline-style: none;
transition: all ease-in-out .4s;
&:hover{
    color: #2A2B2C;
    background: #ffffff;
}

`;
