import InicioIcon from "../../assets/yt-home.png";
import Shorts from "../../assets/shorts.png";
import Incricoes from "../../assets/inscricoes.png";
import You from "../../assets/colecao.png";
import History from "../../assets/yt-historico.png";
import {
    Container,
    Divider,
    ItemContainer,
    MenuItem,
    ButtonIcon,
    ButtonLogin,
    Information
} from "./styles";
import { useContext, useState } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import ExplorerMenu from "./containers/explorerMenu";
import SearchChannels from "./containers/searchChanells";
import More from "./containers/more";
import Config from "./containers/config";
import UserIcon from "../../assets/user.png";
import { UserContext } from "../../contexts/userContext";

const items = [
  {name: 'Início', link: '/', icon: InicioIcon},
  {name: 'Shorts', link: '/shorts', icon: Shorts},
  {name: 'Incrições', link: '/inscricoes', icon: Incricoes},
  {name: 'Você', link: '/create-video', icon: You},
  {name: 'Histórico', link: '/history', icon: History},
]

function Menu() {
    const { openMenu } = useContext(MenuContext);
    const navigate = useNavigate();
    const { login } = useContext(UserContext);
    const [activeElement, setActiveElement] = useState('All');

    const handleClick = (value: number) => {
    setActiveElement(items[value].name);

  };
    return (
        <Container openMenu={openMenu} >
          <ItemContainer openMenu={openMenu}>
            {items.map((item, value) => (
              <MenuItem openMenu={openMenu} onClick={() => {
                navigate(item.link); 
                handleClick(value)}} 
                className={activeElement === item.name ? "active" : ""}
                >
                  <ButtonIcon  alt="" src= {item.icon}/>
                  <span>
                    {item.name}
                  </span>
              </MenuItem>
            ))}
          </ItemContainer>
          {openMenu && (
            <>
              <Divider />
              {login? 
              <></>
              :
              <>
              <Information>Faça login para curtir vídeos, comentar e se inscrever.</Information>
              <ButtonLogin onClick={() => navigate('/login')}>
                <ButtonIcon src={UserIcon}/>
                <span>Fazer Login</span>
              </ButtonLogin> 
              <Divider />
              </>
              }
              <ExplorerMenu />
              <Divider />
              <SearchChannels />
              <Divider />
              <More />  
              <Divider />
              <Config />
            </>
          )}
        </Container>
      )
    }

export default Menu;