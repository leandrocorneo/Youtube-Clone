import { useContext } from "react";
import { MenuContext } from "../../../contexts/menuContext";
import { ButtonIcon, ItemContainer, MenuItem, TitleContainer } from "../styles";
import Premiun from "../../../assets/yt-premiun.png";
import Music from "../../../assets/yt-music.png";
import Kids from "../../../assets/yt-kids (1).png";


const items = [
    {name: 'Youtube Premiun', link:'/premiun', icon: Premiun},
    {name: 'Youtube Music', link:'/music', icon: Music},
    {name: 'Youtube Kids', link:'/kids', icon: Kids},
    
]

function More (){
    const {openMenu} = useContext(MenuContext);

    return(
        <>
        <TitleContainer openMenu= {openMenu}>
            <span>Mais do YouTube</span>
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

export default More;