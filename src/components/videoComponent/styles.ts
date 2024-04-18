import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
`;

export const ImageBanner = styled.img`
    max-width: 375px;
    max-height: 210px;
    width: 100%;
    height: auto;
    border-radius: 12px;
    background-size: cover;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
`;

export const ChannelImage = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: aliceblue;
`;

export const TextContainer = styled.div`
    display: flex;
    width: 86%;
    flex-direction: column;
    margin-left: 10px;
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;