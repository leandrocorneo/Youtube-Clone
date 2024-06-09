import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LogoContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;
export const Logo = styled.img`
    width: 50px;
`;

export const LoginContainer = styled.div`
    width: 350px;
    height: 480px;
    padding: 20px 45px 20px 45px;
    border-radius: 8px;
    border: 1px solid #c9c9c9;
    h2{
        display: flex;
        justify-content: center;
        font-weight: 400;
        margin: 25px 0 0 0;
    }
    h4{
        display: flex;
        font-weight: 400;
        justify-content: center;
        margin: 15px 0 0 0;
    }
    @media(max-width: 480px){
        width: 300px;
        height: 400px;
    }   
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 25px 0 0;
    gap: 10px;
`;

export const InputEmail = styled.input`
    width: 100%;
    border: none;
    border-radius: 3px;
    border: 1px solid #c9c9c9;
    padding: 13px 0px 13px 13px;
    outline-style: none;

    &:focus{
        box-shadow: 0 0 3px 1px blue;
    }
`;

export const InputPassword = styled.input`
    width: 100%;
    border: none;
    border-radius: 3px;
    border: 1px solid #c9c9c9;
    padding: 13px 0px 13px 13px;
    outline-style: none;
    &:focus{
        box-shadow: 0 0 3px 1px blue;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    align-items: center;
    column-gap: 180px;
    padding: 50px 0 0;
`;

export const CreateAccount = styled.span`
    width: 95px;
    height: 30px;
    color: blue;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        background-color: #e8f7fd;
        border-radius: 5px;
    }
`;

export const LoginButton = styled.button`
    width: 75px;
    height: 35px;
    border-radius: 3px;
    background-color: blue;
    color: white;
    border: none;
    cursor: pointer;
`;

export const MessageContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 20px;
    font-weight: 400;
    color: #666666;

    a{
        color: blue;
        text-decoration: none;
    }
`;