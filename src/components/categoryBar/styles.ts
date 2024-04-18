import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    max-width: 1960px;
    position: sticky;
    top: 55px;

    span{
        margin-right: 1rem;
        padding: 0.5rem;
        white-space: nowrap;
        border-radius: 8px;
        cursor: pointer;

        &:hover{
            background-color: #f2f2f2;
        }

        &.active{
            color: white;
            background-color: black;
        }
    }
    @media (max-width: 480px){
    }
`;

export const Slider = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: nowrap;
    align-items: center;
    column-gap: 20px;
    height: 100%;
    overflow-x: hidden;
`;

export const SliderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 100%;
`;

export const SliderButtons = styled.div`
    min-width: 40px;
    max-width: 40px;
    min-height: 40px;
    max-height: 40px;
    border-radius: 50%;
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover{
        background-color: #f2f2f2;
    }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;