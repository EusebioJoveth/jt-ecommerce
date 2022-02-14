import React from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"; 
import Anuncio from "../components/Anuncio";
import Produtos from "../components/Produtos";
import Boletinnoticia from "../components/Boletinnoticia";
import Footer from "../components/Footer";

const Container = styled.div`
`;

const Title = styled.h1`
margin: 20px;
`;

const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
margin: 20px;
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600px;
margin-right: 20px;
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px
`;

const Option = styled.option`
`;

const ProdutoList = () => {
  return (
    <Container>
        <Navbar />
        <Anuncio />
        <Title>Vestidos</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar Produtos:</FilterText>
                <Select>
                    <Option disabled selected>Cor</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select>
                    <Option disabled selected>Tamanho</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Classificar Produtos:</FilterText>
                <Select>
                    <Option selected>Mais novo</Option>
                    <Option>Preço (asc)</Option>
                    <Option>Preço (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Produtos />
        <Boletinnoticia />
        <Footer />
    </Container>
  )
}

export default ProdutoList