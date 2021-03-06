import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { Link } from "react-router-dom";

const Container = styled.div`
flex: 1;
margin: 3px;
height: 7ovh;
position: relative;
`;

const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
${mobile({ height: "30vh"})}
`;

const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Title = styled.h1`
color: #E91E63;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: #E91E63;
color: white;
cursor: pointer;
font-weight: 600;
`;

const CategoriaItem = ({item}) => {
  return(
      <Container>
        <Link to={`/produto/${item.cat}`}>
         <Image src={item.img} />
         <Info>
             <Title>{item.title}</Title>  
             <Button>Compre Agora</Button>
         </Info>
         </Link>
      </Container>
  )
};

export default CategoriaItem;