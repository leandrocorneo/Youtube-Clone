import styled from "styled-components";

interface Props {
    openMenu: boolean;
}

export const Main = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Container = styled.div<Props>`
    width: 98%;
    align-items: center;
    padding: 15px;
    display: grid;
    grid-template-columns: ${({ openMenu }) => openMenu? 'repeat(3, 1fr)': 'repeat(6, 1fr)'};
    justify-content: space-around;
    row-gap: 125px;

    
    @media (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
        row-gap: 120px;
    }
    @media (max-width: 480px){
        display: grid;
        grid-template-columns: repeat(1, 1fr);
        justify-items: center;
        row-gap: 120px;
    }
    `;

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 50px;
    gap: 15px;
    margin: 15px 0 0 15px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    font-weight: 700;
    font-size: 20px;
`;

export const LogoContainer = styled.div`
    height: 24px;
    width: 24px;
`;

export const Logo = styled.img`
    height: 24px;
    width: 24px;
`;

export const CardsContainer = styled.div`
    height: 400px;
    width: 220px;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
`;

export const Thumbnail = styled.img`
    height: 385px;
    border-radius: 10px;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px;
`;

export const TitleCard = styled.span`
    font-weight: 700;
`;

export const TextCard = styled.span`
    font-weight: 300;
`;