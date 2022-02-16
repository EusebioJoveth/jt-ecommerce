import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Anuncio from '../components/Anuncio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 20px;
`;

const Title = styled.h1`
font-weight: 300;
text-align: center;
`;

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 600;
cursor: pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type === "filled" ? "black" : "transparent"};
color: ${props=>props.type === "filled" && "white"};

`;

const TopTexts = styled.div`
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Botton = styled.div`
display: flex;
justify-content: space-between;
`;

const Info = styled.div`
flex: 3;
`;

const Produto = styled.div`
display: flex;
justify-content: space-between;
`;

const ProdutoDetail = styled.div`
flex: 2;
display: flex;
`;

const Image = styled.img`
width: 200px;
`;

const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`;

const ProdutoName = styled.span`
`;

const ProdutoId = styled.span`
`;

const ProdutoSize = styled.span`
`;

const ProdutoColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;

const PrecoDetail = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const ProdutoAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`;

const ProdutoAmount = styled.div`
font-size: 24px;
margin: 5px;
`;

const ProdutoPreco = styled.div`
font-size: 30px;
font-wight: 200;
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Resumo = styled.div`
flex: 1;
`;

const Carrinho = () => {
  return (
    <Container>
        <Navbar />
        <Anuncio />
        <Wrapper>
            <Title>SUA BOLSA</Title>
            <Top>
                <TopButton>CONTINUE COMPRANDO</TopButton>
                <TopTexts>
                    <TopText>Compras Ruins(2)</TopText>
                    <TopText>Sua Lista de Desejo(0)</TopText>
                </TopTexts>
                <TopButton type='filled'>SAINDO AGORA</TopButton>
            </Top>
            <Botton>
                <Info>
                    <Produto>
                        <ProdutoDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProdutoName><b>Produto: </b> Spatilha Jessie Trovão</ProdutoName>
                                <ProdutoId><b>ID:</b> 9253636636</ProdutoId>
                                <ProdutoColor color='black' />
                                <ProdutoSize><b>Tamnho:</b> 39.5</ProdutoSize>
                            </Details>
                        </ProdutoDetail>
                        <PrecoDetail>
                            <ProdutoAmountContainer>
                                <Add />
                                <ProdutoAmount>2</ProdutoAmount>
                                <Remove />
                            </ProdutoAmountContainer>
                            <ProdutoPreco>15.000 AKZ</ProdutoPreco>
                        </PrecoDetail>
                    </Produto>
                    <Hr />

                    <Produto>
                        <ProdutoDetail>
                            <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                            <Details>
                                <ProdutoName><b>Produto: </b> Spatilha Jessie Trovão</ProdutoName>
                                <ProdutoId><b>ID:</b> 9253636636</ProdutoId>
                                <ProdutoColor color='black' />
                                <ProdutoSize><b>Tamnho:</b> 39.5</ProdutoSize>
                            </Details>
                        </ProdutoDetail>
                        <PrecoDetail>
                            <ProdutoAmountContainer>
                                <Add />
                                <ProdutoAmount>2</ProdutoAmount>
                                <Remove />
                            </ProdutoAmountContainer>
                            <ProdutoPreco>15.000 AKZ</ProdutoPreco>
                        </PrecoDetail>
                    </Produto>
                </Info>
                <Resumo>Resumo</Resumo>
            </Botton>
        </Wrapper>
        <Footer />

    </Container>
  )
}

export default Carrinho