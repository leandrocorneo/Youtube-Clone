import styled from 'styled-components';

export const MainContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const InputContainer = styled.div`
    width: 600px;
    padding: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0px 5px 10px 5px rgba(0,0,0,0.1);
    border-radius: 8px;
    position: fixed;
    top: 15%;
`;

export const Title = styled.input`
    width: 100%;
    height: 45px;
    border-radius: 8px;
    border: 1px solid black;
    outline-style: none;

    &:focus{
        box-shadow: 0 0 3px 1px blue;
    }
`;

export const Description = styled.textarea`
    width: 100%;
    height: 300px;
    border-radius: 8px;
    border: 1px solid black;
    outline-style: none;

    &:focus{
        box-shadow: 0 0 3px 1px blue;
    }
`;

export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const CloseTable = styled.button`
    border: none;
    border-radius: 8px;
    background-color: red;
    color: white;
    width: 100px;

    &:hover{
        background-color: black;
        color: white;
        transition: all.5s;
    }
`;

export const ContainerInfos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const OpenTable = styled.button`
    width: 100px;
    height: 45px;
    color: white;
    background-color: blue;
    border-radius: 8px;
    border: none;

    &:hover{
        background-color: aquamarine;
        color: black;
        transition: all.5s;
    }
`;

export const CreateVideo = styled.button`
    width: 100px;
    height: 45px;
    color: white;
    background-color: blue;
    border-radius: 8px;
    border: none;

    &:hover{
        background-color: aquamarine;
        color: black;
        transition: all.5s;
    }
`;

export const ContainerLogin = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 150px;
    gap: 20px;
`;

export const LibraryIcon = styled.img`
    width: 200px;
    height: auto;
`;