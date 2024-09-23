import styled, { keyframes } from 'styled-components';

// Definindo a animação de clique
const clickAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1); /* Aumento */
  }
  100% {
    transform: scale(1); /* Retorna ao normal */
  }
`;

export const AnimatedButton = styled.button`
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e0e0e0;
    transform: scale(1.05);
  }

  &.clicked {
    animation: ${clickAnimation} 0.2s ease; /* Aplicando a animação ao clicar */
  }
`;

export const AnimatedContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #222222;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;

  &.light {
    background-color: #ffffff;
    color: #000000;
  }

  &.dark {
    background-color: #222222;
    color: #ffffff;
  }
`;