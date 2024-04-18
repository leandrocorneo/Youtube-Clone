import { useContext } from "react";
import { ButtonIcon, ItemContainer, MenuItem } from "../styles";
import { MenuContext } from "../../../contexts/menuContext";
import More from "../../../assets/mais.png";

const items = [
    {name: 'Procurar Canais', link:'/channels', icon: More}
]

function SearchChannels (){
    const {openMenu} = useContext(MenuContext);

    return(
        <ItemContainer openMenu= {openMenu}>
        {items.map((item) => (
            <MenuItem openMenu= {openMenu}>
                <ButtonIcon alt="" src={item.icon}/>
                <span>{item.name}</span>
            </MenuItem>
        ))}
    </ItemContainer> 
    )
}

export default SearchChannels;