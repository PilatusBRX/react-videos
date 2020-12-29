import React from "react";
import styled from 'styled-components';


const Rating = ({ value,  color }) => {
  return (
    <Icons>
      <Icon>
        <i
          style={{ color }}
          className={
            value >= 1
              ? "fas fa-star"
              : value >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </Icon>
      <Icon>
        <i
          style={{ color }}
          className={
            value >= 2
              ? "fas fa-star"
              : value >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </Icon>
      <Icon>
        <i
          style={{ color }}
          className={
            value >= 3
              ? "fas fa-star"
              : value >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </Icon>
      <Icon>
        <i
          style={{ color }}
          className={
            value >= 4
              ? "fas fa-star"
              : value >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </Icon>
      <Icon>
        <i
          style={{ color }}
          className={
            value >= 5
              ? "fas fa-star"
              : value >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        ></i>
      </Icon>  
    </Icons>
  );
};
Rating.defaultProps = {
  color: "#ebebeb",
};

const Icons = styled.div`    
   
    @media (max-width: 720px) {        
    margin: 1em .15em;   
  
}
`;
const Icon = styled.span`    
    font-size: 1.45em;
    color: #9E9C9F;
    @media (max-width: 720px) {  
    font-size: 1em;    
    margin: 1em .15em;   
  
}
`;

export default Rating;
