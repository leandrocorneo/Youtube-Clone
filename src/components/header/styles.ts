import styled from 'styled-components';

export const Container = styled.header<{openMenu: boolean}>`
    width: 100%;
    height: 55px;
    background-color: white;
    padding: ${({ openMenu }) => openMenu? '0 16px': '0 24px'};
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 1;
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonContainer = styled.div<{ margin?: string}>` 
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin: ${({ margin }) => margin? margin: 0};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #fff;
    color: black;
    margin-left: 15px;

    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonChannel = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: #f2f2f2;
    color: black;
    margin-left: 15px;
`;

export const ButtonIcon = styled.img` 
    width: 20px;
`;

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchInputContainer = styled.div`
    width: 450px;
    height: 35px;
    border: 1px solid #d3d3d3;
    border-radius: 40px 0 0 40px;
    display: flex;
    align-items: center;
    padding: 0 16px;

    @media (max-width: 480px){
        display: none;
    }

    @media (max-width: 768px){
        width: 50%;
    }
`;

export const SearchInput = styled.input`
    width: 100%;
    height: 25px;
    outline: none;
    border: none;
`;

export const SearchButton = styled.div`
    border-radius: 0 40px 40px 0;
    height: 35px;
    width: 75px;
    background-color: #f8f8f8;
    border: 1px solid #d3d3d3;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @media (max-width: 480px){
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 12px;
        border: none;
        background-color: white;

        &:hover{
            background-color: #f2f2f2;
        }
    }
`;


export const HeaderButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    span{
        cursor: pointer;
    }
`;


export const ButtonLogin = styled.button`
    width: 125px;
    height: 35px;
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
    margin-left: 15px;
`;

export const DropDownMenu = styled.div<{OpenDropDownMenu: boolean}>`
    width: ${({OpenDropDownMenu}) => OpenDropDownMenu ? '200px' : '0'};
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 10px 0;
    box-sizing: border-box;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
    position: absolute;
    top: 8px;
    right: ${({OpenDropDownMenu}) => OpenDropDownMenu ? '75px' : '-200px'};
    background-color: white;
`;

export const DropMenuContent = styled.div<{OpenDropDownMenu: boolean}>`
    margin-left: 20px;

    span{
        visibility: ${({ OpenDropDownMenu }) => OpenDropDownMenu ? 'visible' : 'hidden'};
    }
`;

export const Content = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    cursor: pointer;
`;

export const Name = styled.span`
    font-size: 1rem;
`;

export const UserContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 20px;
`;
