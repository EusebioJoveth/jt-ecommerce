import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
width: 100 vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
), url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
 center;
 background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
width: 40%;
padding: 20px;
background-color: white;

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-wrap: wrap;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;
`;

const Aceitar = styled.div`
font-size: 12px;
margin: 20px 0px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #E91E63;
color: white;
cursor: pointer;
`;

const Registo = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Criar Conta</Title>
            <Form>
                <Input placeholder="Nome" />
                <Input placeholder="Sobrenome" />
                <Input placeholder="Username" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Input placeholder="Confirmar password" />
                <Aceitar>Ao criar uma conta, concordo com o processamento 
                    dos meus dados pessoais de acordo com a <strong> POLÍTICA</strong> de
                     <strong> PRIVACIDADE</strong>
                </Aceitar>
                <Button>CRIAR</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Registo