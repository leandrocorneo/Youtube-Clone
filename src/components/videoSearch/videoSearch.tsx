import { ChannelImage, ChannelInfos, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from "./styles";

interface Props{
    title: string;
    details: string;
    thumbnail: string;
    channelImage: string;
    channelName: string;
    description: string;
}

function VideoSearch(props: Props) {
    return(
        <Container>
            <ImageBanner src={props.thumbnail} />
            <TitleContainer>
                <TextContainer>
                    <Title>{props.title}</Title>
                    <ChannelInfos>
                        <ChannelImage>{props.channelImage}</ChannelImage>
                        <TextCard>{props.channelName}</TextCard>
                    </ChannelInfos>
                    <TextCard>{props.details}</TextCard>
                    <TextCard>{props.description}</TextCard>
                </TextContainer>
            </TitleContainer>
        </Container>
    )
}

export default VideoSearch;