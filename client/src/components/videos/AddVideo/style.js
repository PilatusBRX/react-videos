import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
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


export const Select = styled.select`
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
   color: #ccc;
   font-size: 1.4em;
   letter-spacing: 1.2px;
   padding-right: 2em;
`;
export const Textarea = styled.textarea`
   width: 70%;
   max-height: 18em;
   min-height: 12em;
   background-color: #4D494E;
   color: #f7f7f7;
   border-radius: 3px;
   border: none;
   margin: 0 auto;
   margin-bottom: .5em;
   outline-style: none;
   padding-left: 1.6em;
   padding-top: 1.6em;
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