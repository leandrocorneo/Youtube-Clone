import styled from "styled-components";

interface Props {
    openMenu: boolean
}

export const MainContainer = styled.div`
    width: 100%;
    overflow-x: hidden;
    height: 100vh;
`;

export const Container = styled.div<Props>`
    width: 100%;
    padding: ${({openMenu}) => openMenu? '0 0 0 280px' : '0 0 0 120px'};

    @media (max-width: 480px){
    padding: 0 0 0 20px;
  }

    @media (max-width: 768px){
    padding: 0 0 0 20px;
  }
`;
