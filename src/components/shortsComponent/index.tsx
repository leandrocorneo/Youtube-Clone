import { CardsContainer, Container, HeaderContainer, Logo, LogoContainer, Main, TextCard, TextContainer, Thumbnail, TitleCard, TitleContainer } from "./styles";
import Shorts from "../../assets/shorts.png";
import { useContext } from "react";
import { MenuContext } from "../../contexts/menuContext";

function CardsShorts () {

    const {openMenu} = useContext(MenuContext);

    return(
        <>
        <Main>
            <HeaderContainer>
                <LogoContainer>
                    <Logo src={Shorts} />
                </LogoContainer> 
                <TitleContainer>Shorts</TitleContainer>
            </HeaderContainer>
            <Container openMenu={openMenu}>
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/_QPhWgVvTTM/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLAbGAt2Pa1d-qK581qDJnNxDARb7w"/>
                    <TextContainer>
                        <TitleCard>GAULES EXPLODINDO DE DAR RISADA COM LIMINHA TENTANDO DEFUSAR! 😂😂😂</TitleCard>
                        <TextCard>49 mil visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>    
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/E0du8W5kQHU/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLBopujZMyYAb4kYOavj1bL4a5u8sA"/>
                    <TextContainer>
                        <TitleCard>Comemoração "MÁGICA"! Sensacional kkkkkkkkkk</TitleCard>
                        <TextCard>149 mil visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>  
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/NBwzzu-kMJk/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLCyn-nIN4Wy01oX8OvpHuI31PU2bA"/>
                    <TextContainer>
                        <TitleCard>TESTANDO O NOVO NOTEBOOK GAMER DA AVELL</TitleCard>
                        <TextCard>56 mil visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>  
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/DDUTbjrgwQs/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLDyxodfcQUzyjWC_L1HCFEwU5ZCqw"/>
                    <TextContainer>
                        <TitleCard>GAULES FICOU ATÉ COM VERGONHA DE DAR ESSA NOTICIA! KKKKKKKKKK</TitleCard>
                        <TextCard>132 mil visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>  
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/3Dg-5N5YiJ8/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC0nTfE6TaBGrUk3VIaCotuzJK-8Q"/>
                    <TextContainer>
                        <TitleCard>Como era jogar contra o Cristiano Ronaldo no Real Madrid</TitleCard>
                        <TextCard>1,2 mi de visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>
                <CardsContainer>
                    <Thumbnail src="https://i.ytimg.com/vi/3Dg-5N5YiJ8/oar2.jpg?sqp=-oaymwEkCJUDENAFSFqQAgHyq4qpAxMIARUAAAAAJQAAyEI9AICiQ3gB&rs=AOn4CLC0nTfE6TaBGrUk3VIaCotuzJK-8Q"/>
                    <TextContainer>
                        <TitleCard>Como era jogar contra o Cristiano Ronaldo no Real Madrid</TitleCard>
                        <TextCard>1,2 mi de visualizações</TextCard>
                    </TextContainer>
                </CardsContainer>      
            </Container>
        </Main>
        </>
    )
}

export default CardsShorts;