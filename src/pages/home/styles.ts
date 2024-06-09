import styled from "styled-components";

interface ContainerProps {
  openMenu: boolean;
}

export const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)' };
  gap: 20px;

  @media (max-width: 768px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px){
    grid-template-columns: repeat(1, 1fr);
  }

`;

export const MainContainer = styled.div<ContainerProps>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '0 0 0 250px' : '0 0 0 100px'};
  box-sizing: border-box;

  @media (max-width: 480px){
    padding: 0 0 0 20px;
  }

  @media (max-width: 768px){
    padding: 0 0 0 20px;
  }
`;
export const HomeContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
`;

