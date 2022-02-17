import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import Anuncio from '../components/Anuncio';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { mobile } from '../responsive';

const Container = styled.div`
`;

const Wrapper = styled.div`
padding: 20px;
${mobile({padding: "10px"})}
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
${mobile({display: "none"})}
`;

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0px 10px;
`;

const Botton = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
`;

const Info = styled.div`
flex: 3;
`;

const Produto = styled.div`
display: flex;
justify-content: space-between;
${mobile({flexDirection: "column"})}
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
${mobile({margin: "5px 15px"})}
`;

const ProdutoPreco = styled.div`
font-size: 30px;
font-wight: 200;
${mobile({marginBottom: "20px"})}
`;

const Hr = styled.hr`
background-color: #eee;
border: none;
height: 1px;
`;

const Resumo = styled.div`
flex: 1;
border: 0.5px solid lightgray;
border-radius: 10px;
padding: 20px;
height: 50vh;
`;

const ResumoTitle = styled.h1`
font-weight: 200;
`;

const ResumoItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"}
`;

const ResumoItemText = styled.span`
`;

const ResumoItemPreco = styled.span`
`;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
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
                                <ProdutoSize><b>Tamnho:</b> 40</ProdutoSize>
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
                            <Image  src="https://i.pinimg.com/originals/2d/af/f8/2daff8e0823e51dd752704a47d5b795c.png" />
                            <Details>
                                <ProdutoName><b>Produto: </b> T-SHIRT HAKURA</ProdutoName>
                                <ProdutoId><b>ID:</b> 9253636636</ProdutoId>
                                <ProdutoColor color='gray' />
                                <ProdutoSize><b>Tamnho:</b> M</ProdutoSize>
                            </Details>
                        </ProdutoDetail>
                        <PrecoDetail>
                            <ProdutoAmountContainer>
                                <Add />
                                <ProdutoAmount>2</ProdutoAmount>
                                <Remove />
                            </ProdutoAmountContainer>
                            <ProdutoPreco>5.000 AKZ</ProdutoPreco>
                        </PrecoDetail>
                    </Produto>
                </Info>
                <Resumo>
                    <ResumoTitle>Resumo do Pedido</ResumoTitle>
                    <ResumoItem>
                        <ResumoItemText>Subtotal</ResumoItemText>
                        <ResumoItemPreco>20.000 Akz</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoItemText>Envio Estimado</ResumoItemText>
                        <ResumoItemPreco>1.000 Akz</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem>
                        <ResumoItemText>Desconto de Envio</ResumoItemText>
                        <ResumoItemPreco>500 Akz</ResumoItemPreco>
                    </ResumoItem>
                    <ResumoItem type="total">
                        <ResumoItemText>Total</ResumoItemText>
                        <ResumoItemPreco>21.500 Akz</ResumoItemPreco>
                    </ResumoItem>
                    <Button>SAINDO AGORA</Button>
                </Resumo>
            </Botton>
        </Wrapper>
        <Footer />

    </Container>
  )
}

export default Carrinho