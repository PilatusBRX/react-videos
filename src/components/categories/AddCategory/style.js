import styled from 'styled-components';

export const Title = styled.h1`
text-align: center;
font-weight: 900;
letter-spacing: 1.5px;
margin: 2em 0;
text-transform: uppercase;
`;
export const Message = styled.h2`
    text-align: center;
    font-weight: 900;
    letter-spacing: 1.5px;
    margin: 1em 0;   
    color: crimson;       
    width: 70%;
    margin: 1em auto;

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

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
   width: 70%;
   height: 4em;
   background-color: #4D494E;
   color: #f7f7f7;
   border-radius: 3px;
   border: none;
   margin: 0 auto;
   margin-bottom: .5em;
   outline-style: none;
   padding-left: 1.6em;
   color: #f7f7f7;
`;

export const Button = styled.button`
   width: 70%;
   height: 4em;
   background-color: #4D494E;
   color: #ffffff;
   border-radius: 3px;
   border: none;
   margin: 0 auto;
   margin-bottom: .5em;
   outline-style: none;
   padding-left: 1.6em;
   transition: all ease-in-out .4s;
   text-transform: uppercase;
   font-weight: 900;
   &:hover{
       cursor: pointer;
       color: #4D494E;
       background-color: #ffffff;
   }
`;
export const Back = styled.div`  
  color: #9D9B9B;
   font-size: 3.2em;
   position: absolute;
   top: 4.6em;
   
`;