import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    cursor: pointer;
    display: flex;
    margin-bottom: 15px;

    @media (max-width: 480px){
        flex-direction: column;
    }

`;

export const ImageBanner = styled.img`
    max-width: 375px;
    max-height: 210px;
    width: 100%;
    height: auto;
    border-radius: 12px;
`;

export const ChannelInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    margin-left: 20px;

    @media (max-width: 480px){
        margin-left: 0;
    }
`;

export const Title = styled.span`
    font-weight: 600;
    color: #0f0f0f;
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
    flex-direction: column;
    margin-left: 10px;
    gap: 15px;

    @media (max-width: 480px){
        width: 375px;
        margin: 0;
    }
`;

export const TextCard = styled.span`
    color: #8c8c8c;
    font-size: 14px;
`;