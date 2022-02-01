import React from 'react';
import styled from 'styled-components';
import {categorias} from '../data';
import CategoriaItem from './CategoriaItem';

const Container = styled.div` 
display: flex;
padding: 20px;
justify-content: space-between;
`;

const Categoria = () => {
  return (
      <Container>
        {categorias.map(item => (
          <CategoriaItem item={item}/>
        ))}
      </Container>
  )
};

export default Categoria;