import {useState} from 'react'
import styled from "styled-components";
import Navbar from "../components/Navbar"; 
import Anuncio from "../components/Anuncio";
import {Produtos} from "../components/Produtos";
import Boletinnoticia from "../components/Boletinnoticia";
import Footer from "../components/Footer";
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';

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
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column"})}
`;
const FilterText = styled.span`
font-size: 20px;
font-weight: 600px;
margin-right: 20px;
${mobile({marginRight: "0px"})}
`;

const Select = styled.select`
padding: 10px;
margin-right: 20px
${mobile({margin: "10px 0px"})}
`;

const Option = styled.option`
`;

const ProdutoList = () => {

    const location = useLocation(); //Pega a rota na url
    const cat = location.pathname.split("/")[2];
    const [filters, setFilter] = useState({});
    const [ordena, setOrdena] = useState("Mais novo");

    const handleFilters = (e) =>{
        const value = e.target.value;

        setFilter({
            ...filters,
            [e.target.name]: value,
        });
    }
    

  return (
    <Container>
        <Navbar />
        <Anuncio />
        <Title>Vestidos</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filtrar Produtos:</FilterText>
                <Select name='cor' onChange={handleFilters}>
                    <Option disabled>Cor</Option>
                    <Option>Branco</Option>
                    <Option>Preto</Option>
                    <Option>Vermelho</Option>
                    <Option>Azul</Option>
                    <Option>Amarelo</Option>
                    <Option>Verde</Option>
                </Select>
                <Select name='tamanho' onChange={handleFilters}>
                    <Option disabled >Tamanho</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Classificar Produtos:</FilterText>
                <Select onChange={(e)=> setOrdena(e.target.value)}>
                    <Option value="Mais novo">Mais novo</Option>
                    <Option value="asc">Preço (asc)</Option>
                    <Option value="desc">Preço (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Produtos cat={cat} filters={filters} sort={ordena} />
        <Boletinnoticia />
        <Footer />
    </Container>
  )
}

export default ProdutoList