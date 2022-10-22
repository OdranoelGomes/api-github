import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 100vh; 
  padding: 0 2rem;
`;

// Imagem
// Componente customizado.
export const Logo = styled.img`
width: 130px;
`;

export const Title = styled.h1`
  font-size: 2,2rem;
  color: ${(props) => props.theme.colors.text};
`;

// Div do input e botão
export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 583px;
`;

// Input
export const Input = styled.input`
  background: #191919;
  width: 100%;
  height: 64px;
  line-height: 64px;
  border: none;
  font-size: 24px;
  margin-right: 24px;
  padding: 0 24px;
  border-radius: 50px;
  border: 1px solid #5f6368;
  

  &::placehoder {
    color: ${(props) => props.theme.colors.metalDark};
  }

  &:hover {
    background: #303134;
    transition: background 0.3s;
    border: none;
    
  }
`;

// Botão
export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;

  background: transparent;
  width 80px;
  height: 64px;
  border: 3px solid ${(props) => props.theme.colors.text};
  transition: background 0.3s;
  border-radius: 50%;

  &:hover {
    background: ${(props) => props.theme.colors.container};
  }
  `;