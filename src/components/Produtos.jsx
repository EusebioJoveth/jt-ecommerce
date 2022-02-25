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

export const Produtos = (props) => {
  const [produtos, setProdutos] = useState([]);
  const [prodFiltered, setProdFiltered] = useState([]);

  useEffect (()=>{
    const getProdutos = async() =>{
      try{
        const res = await axios.get(
          props.cat?`http://localhost:5000/api/products?category=${props.cat}`
          : "http://localhost:5000/api/products"
          );
          setProdutos(res.data);
      }catch(err){

      }
    };
    getProdutos();
  }, [props.cat]);

  useEffect( () =>{
   console.log(props.filters)
 
     setProdFiltered(
      produtos.filter((item) =>
      Object.entries(props.filters).every(([key, value]) =>
         item[key].includes(value)
      )
    )
     );

   

  }, [produtos, props.cat, props.filters]);

  return (
      <Container>
          {prodFiltered.map((item) => (
              <Produto item={item} key={item.id} />

         ))}
      </Container>
  )
};

 