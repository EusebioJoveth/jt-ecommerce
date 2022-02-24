import {useEffect, useState} from 'react';
import styled from "styled-components";
import { maisComprados } from '../data';
import { Produto } from './Produto';
import axios from 'axios';

const Container = styled.div`
padding: 20px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;

`;

export const Produtos = (categoria, filtros, ordena) => {
  const [produtos, setProdutos] = useState([]);
  const [prodFiltered, setProdFiltered] = useState([]);

  useEffect (()=>{
    const getProdutos = async() =>{
      try{
        const res = await axios.get("http://localhost:5000/api/products");
        console.log(res)

      }catch(err){

      }
    };
    getProdutos()

  }, [categoria])

  return (
      <Container>
          {maisComprados.map((item) => (
              <Produto item={item} key={item.id} />

         ))}
      </Container>
  )
};

 