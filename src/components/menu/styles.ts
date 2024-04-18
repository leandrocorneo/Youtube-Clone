import styled from "styled-components";

export const Container = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '250px': '100px'};
    height: calc(100vh - 55px);
    box-sizing: border-box;
    padding: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: ${({ openMenu }) => openMenu? 'scroll': 'none'};
    overflow-x: hidden;
    position: fixed;
    top: 55px;
    background-color: white;

    @media (max-width: 480px){
        padding: 0 0 0 10px;
        display: ${({ openMenu }) => openMenu? 'flex': 'none'};
        z-index: 1;
    }

    @media (max-width: 768px){
        padding: 0 0 0 10px;
        display: ${({ openMenu }) => openMenu? 'flex': 'none'};
        z-index: 1;
    }
`;

export const TitleContainer = styled.div<{ openMenu: boolean }>`
    width: ${({ openMenu }) => openMenu? '90%': '0'};
    font-weight: 700;
    font-size: 20px;
    align-items: center;
    justify-content: flex-start;
    margin: 12px 0px 0px 20px;
    `;

export const ItemContainer = styled.div<{ openMenu: boolean }>`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: ${({ openMenu }) => openMenu? '12px': '0'};
    :hover{
        background-color: #f2f2f2;
    }
    h1{
        pointer-events: none;
        font-size: ${({ openMenu }) => openMenu? '20px': '0px'};
        width: 90%;
        padding: 2px 17px;
        margin: 0;
    }
`;

export const MenuItem = styled.div<{ openMenu: boolean }>`
    width: 90%;
    min-height: ${({ openMenu }) => openMenu? '40px': '70px'};
    border-radius: 10px;
    cursor: pointer;
    padding: 2px 17px;
    box-sizing: border-box;
    display: flex;
    flex-direction: ${({ openMenu }) => openMenu? 'row': 'column'};
    align-items: center;
    justify-content: ${({ openMenu }) => openMenu? 'none': 'center'};

    &.active{
            background-color: #f2f2f2;
        }

    span{
        font-weight: ${({ openMenu }) => openMenu? '600': '400'};
        margin-left: ${({ openMenu }) => openMenu? '20px': 'none'};
        font-size: ${({ openMenu }) => openMenu? '16px': '12px'};
    }`;
export const ButtonIcon = styled.img` 
    width: 20px;
`;

export const Divider = styled.div`
    width: 100%;
    border: 1px solid #f2f2f2;
`;

export const ButtonLogin = styled.button`
    border-radius: 999px;
    border: 1px solid;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: white;
    border-color: blue;
    color: blue;
    cursor: pointer;
    margin: 25px 32px 25px 0;
    padding: 5px;
    width: 150px;
`;

export const Information = styled.span`
    display: block;
    top: 20px;
    position: relative;
    margin: 0 0 20px 30px;
    font-family: "Roboto","Arial",sans-serif;
    line-height: 1.3rem;
    font-weight: 400;
`;




