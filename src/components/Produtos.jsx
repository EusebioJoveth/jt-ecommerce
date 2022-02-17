import React from 'react';
import styled from "styled-components";
import { maisComprados } from '../data';
import { Produto } from './Produto';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

export const Produtos = () => {
  return (
      <Container>
          {maisComprados.map((item) => (
              <Produto item={item} key={item.id} />

         ))}
      </Container>
  )
};

 