import { useContext } from "react";
import { ButtonIcon, ItemContainer, MenuItem, TitleContainer } from "../styles";
import { MenuContext } from "../../../contexts/menuContext";

import Trending from "../../../assets/icon-fire.png";
import Shopping from "../../../assets/yt-shopping.png";
import MusicIcon from "../../../assets/music-icon.png";
import Films from "../../../assets/yt-films.png";
import Live from "../../../assets/yt-live.png";
import Games from "../../../assets/yt-gaming.png";
import News from "../../../assets/noticias (1).png";
import Sports from "../../../assets/trofeu.png";
import Learn from "../../../assets/light.jpg";
import Podcasts from "../../../assets/podcast.png";

const items = [
    {name: 'Em alta', link: '/trending', icon: Trending},
    {name: 'Shopping', link: '/shopping', icon: Shopping},
    {name: 'Música', link: '/music', icon: MusicIcon},
    {name: 'Filmes', link: '/films', icon: Films},
    {name: 'Ao vivo', link: '/live', icon: Live},
    {name: 'Jogos', link: '/games', icon: Games},
    {name: 'Notícias', link: '/news', icon: News},
    {name: 'Esportes', link: '/sports', icon: Sports},
    {name: 'Aprender', link: '/learn', icon: Learn},
    {name: 'Podcasts', link: '/podcasts', icon: Podcasts},
]

function ExplorerMenu (){
    const {openMenu} = useContext(MenuContext);

    return(
        <>
        <TitleContainer openMenu= {openMenu}>
            <span>Explorar</span>
        </TitleContainer>
        <ItemContainer openMenu= {openMenu}>
            {items.map((item) => (
                <MenuItem openMenu= {openMenu}>
                    <ButtonIcon alt="" src={item.icon}/>
                    <span>{item.name}</span>
                </MenuItem>
            ))}
        </ItemContainer>
        </>
    )
}

export default ExplorerMenu;