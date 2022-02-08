import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
`;

const Title = styled.h1`
`;

const Desc = styled.div`
`;

const InputContainer = styled.div`
`;

const Input = styled.input`
`;

const Button = styled.button`
`;

const Boletinnoticia = () => {
  return (
      <Container>
          <Title>Notícias</Title>
          <Desc></Desc>
          <InputContainer>
          <Input placeholder='Teu email'/>
          <Button>
              <Send />
          </Button>
          </InputContainer>

      </Container>
  )
}

export default Boletinnoticia;
