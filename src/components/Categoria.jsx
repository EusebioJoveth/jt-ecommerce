import React from 'react';
import styled from 'styled-components';
import {categorias} from '../data';
import CategoriaItem from './CategoriaItem';
import { mobile } from '../responsive';

const Container = styled.div` 
display: flex;
padding: 20px;
justify-content: space-between;
${mobile({ padding: "0px", flexDirection: "column"})}
`;

const Categoria = () => {
  return (
      <Container>
        {categorias.map(item => (
          <CategoriaItem item={item} key={item.id}/>
        ))}
      </Container>
  )
};

export default Categoria;
