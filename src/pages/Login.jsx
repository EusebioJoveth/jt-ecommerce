import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive';


const Container = styled.div`
width: 100 vw;
height: 100vh;
background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
), url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
 center;
background-size: cover;
 display: flex;
 align-items: center;
 justify-content: center;
`;

const Wrapper = styled.div`
width: 25%;
padding: 20px;
background-color: white;
${mobile({ width: "75%"})}

`;

const Title = styled.h1`
font-size: 24px;
font-weight: 300;
`;

const Form = styled.form`
display: flex;
flex-direction: column;
`;

const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 10px 0px;
padding: 10px;
`;

const Button = styled.button`
width: 40%;
border: none;
padding: 15px 20px;
background-color: #E91E63;
color: white;
cursor: pointer;
margin-button: 10px;
`;

const Link = styled.a`
margin: 5px 0px;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
    <Wrapper>
        <Title>Entrar</Title>
        <Form>
            <Input placeholder="Username" />
            <Input placeholder="Password" />
            <Button>LOGIN</Button>
            <Link>VOCÊ NÃO LEMBRA A SENHA?</Link>
            <Link>CRIAR NOVA CONTA</Link>
        </Form>
    </Wrapper>
</Container>
  )
}

export default Login