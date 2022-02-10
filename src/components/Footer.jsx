import { Facebook, Instagram, LinkedIn, Twitter } from '@material-ui/icons';
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
`;

const Right = styled.div`
flex: 1;
`;

const Logo = styled.h1`
`;

const Desc = styled.p`
`;

const SocialContainer = styled.div`
`;

const SocialIcon = styled.div`
`;

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>JTecnologia</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam perferendis, iusto quis ad iste tempora nam officiis voluptatum sit est nisi voluptate aperiam aliquid ea ipsa sequi distinctio natus! Velit.</Desc>
            <SocialContainer>
                <SocialIcon>
                    <Facebook />
                </SocialIcon>
                <SocialIcon>
                    <Instagram />
                </SocialIcon>
                <SocialIcon>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon>
                    <LinkedIn />
                </SocialIcon>

            </SocialContainer>
        </Left>
        <Center></Center>
        <Right></Right>
    </Container>
  )
}

export default Footer