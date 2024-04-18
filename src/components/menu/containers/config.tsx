import { useContext } from "react";
import { ButtonIcon, ItemContainer, MenuItem } from "../styles";
import { MenuContext } from "../../../contexts/menuContext";
import ConfigIcon from "../../../assets/config.png";
import Denuncia from "../../../assets/denuncias.png";
import Help from "../../../assets/ajuda.png";
import Feedback from "../../../assets/feedback (1).png";

const items = [
    {name: 'Configurações', link:'/configuracoes', icon: ConfigIcon},
    {name: 'Histórico de denúncias', link:'/denuncias', icon: Denuncia},
    {name: 'Ajuda', link:'/help', icon: Help},
    {name: 'Feedback', link:'/feedback', icon: Feedback}
]

function Config (){
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

export default Config;