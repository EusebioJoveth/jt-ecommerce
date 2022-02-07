import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';
import styled from "styled-components";


const Container = styled.div`
flex: 1;
margin: 5px;
min-width: 289px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #FCE4EC;

`;

const Circle = styled.div`
`;

const Image = styled.img`
height: 65%;

`;

const Info = styled.div`
`;

const Icon = styled.div`
`;

export const Produto = ({item}) => {
  return (
      <Container>
          <Circle />
          <Image src={item.img} />
          <Info>
              <Icon>
                  <ShoppingCartOutlined/>
              </Icon>
              <Icon>
                  <SearchOutlined />
              </Icon>
              <Icon>
                  <FavoriteBorderOutlined />
              </Icon>
          </Info>
      </Container>
  )
};
