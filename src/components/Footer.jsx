import { Facebook, Instagram, LinkedIn, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
`;

const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;

const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-botton: 30px;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;

const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;

const Right = styled.div`
flex: 1;
padding: 20px;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
margin: 20px 0px;
`;

const SocialContainer = styled.div`
display: flex;
`;

const SocialIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;

`;

const ContactItem = styled.div`
margin-bootom: 20px;
display: flex;
align-items: center;

`;

const Payment = styled.img`
width: 50%;
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JTecnologia</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis, iusto quis ad iste tempora nam officiis voluptatum sit est nisi voluptate aperiam aliquid ea ipsa sequi distinctio natus! Velit.</Desc>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook />
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
               
                <SocialIcon color='0091EA'>
                    <LinkedIn />
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center>
            <Title>Links Úteis</Title>
            <List>
                <ListItem>Início</ListItem>
                <ListItem>Carrinho</ListItem>
                <ListItem>Moda Masculina</ListItem>
                <ListItem>Moda Femenina</ListItem>
                <ListItem>Acessórios</ListItem>
                <ListItem>Minha Conta</ListItem>
                <ListItem>Outro Rastreamento</ListItem>
                <ListItem>Lista de Desejo</ListItem>
                <ListItem>Termos</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contacto</Title>
            <ContactItem><Room style={{marginRight: "10px"}} /> Viana, Zango 3 paragem da pracinha</ContactItem>
            <ContactItem><Phone style={{marginRight: "10px"}}/> +244 935171658 </ContactItem>
            <ContactItem><MailOutline style={{marginRight: "10px"}}/> jt@gmail.com</ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer