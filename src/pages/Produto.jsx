import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from "styled-components";
import Anuncio from '../components/Anuncio';
import Boletinnoticia from '../components/Boletinnoticia';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 50px;
display: flex;
`;

const ImgContainer = styled.div`
flex: 1;
`;

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`;

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`;

const Title = styled.h1`
font-weight: 200;
`;

const Desc = styled.p`
margin: 20px 0px;

`;

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`;

const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`;

const Filter = styled.div`
display: flex;
align-items: center;
`;

const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor: pointer;

`;

const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;
`;

const FilterSizeOption = styled.option`
`;

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;

`;

const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: 700;
`;

const Amount = styled.span`
width: 30px;
heigth: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`;

const Button = styled.button`
padding: 15px;
border: 2px solid #9C27B0;
background-color: white;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: #E0E0E0;
}
`;


const Produto = () => {
  return (
    <Container>
        <Navbar />
        <Anuncio />
        <Wrapper>
            <ImgContainer>
            <Image src="https://i.ibb.co/S6qMxwr/Jean.jpg" />
            </ImgContainer>
            <InfoContainer>
                <Title>Macacão Jeasn</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Repudiandae in nesciunt animi molestiae, enim vero fugiat cumque ea excepturi
                     sequi magni soluta laboriosam, quisquam reprehenderit 
                    numquam perspiciatis consequuntur ut maiores.
                </Desc>
                <Price>3500 Akz</Price>
                <FilterContainer>
                   <Filter>
                   <FilterTitle>Cor</FilterTitle>
                    <FilterColor color="black" />
                    <FilterColor color="darkblue" />
                    <FilterColor color="gray" />
                   </Filter>

                   <Filter>
                       <FilterTitle>Tamanho</FilterTitle>
                       <FilterSize>
                           <FilterSizeOption>XS</FilterSizeOption>
                           <FilterSizeOption>S</FilterSizeOption>
                           <FilterSizeOption>M</FilterSizeOption>
                           <FilterSizeOption>L</FilterSizeOption>
                           <FilterSizeOption>XL</FilterSizeOption>
                       </FilterSize>
                   </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove />
                        <Amount>1</Amount>
                        <Add />
                    </AmountContainer>
                    <Button>Adicionar ao Carrinho</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Boletinnoticia />
        <Footer />
    </Container>
  )
}

export default Produto