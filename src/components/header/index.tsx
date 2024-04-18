import { 
    Container, 
    LogoContainer, 
    ButtonContainer, 
    ButtonIcon, 
    SearchContainer,
    SearchInputContainer,
    SearchInput,
    SearchButton,
    HeaderButtons,
    ButtonLogin,
    DropMenuContent,
    Content,
    DropDownMenu,
    UserContainer,
    ButtonChannel,
    Name
} from "./styles";
import HamburguerIcon from "../../assets/hamburger.png";
import Logo from "../../assets/logo.png";
import SearchIcon from "../../assets/search.png";
import VoiceIcon from "../../assets/mic.png";
import NotificationIcon from "../../assets/sino.png";
import VideoIcon from "../../assets/video.png";
import GoOut from "../../assets/sair.png";
import UserIcon from "../../assets/user.png";
import { useContext, useState } from "react";
import { MenuContext } from "../../contexts/menuContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/userContext";
import { SearchContext } from "../../contexts/searchContext";

function Header(){
    const {openMenu, setOpenMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const { login, logOut, OpenDropDownMenu, setDropDownMenu, user} = useContext(UserContext);
    const [searchTerm, setSearchTerm] = useState('');
    const {setSearch} = useContext(SearchContext);

    const handleDropDownMenu = () =>{
        setDropDownMenu(!OpenDropDownMenu);
    }

    const handleSearch = (searchTerm: string) => {
        setSearchTerm(searchTerm);
    }

    const goBack = () => {
        logOut();
        handleDropDownMenu();
        navigate('/');
      }

    return(
        <Container openMenu={openMenu}>
            <LogoContainer>
                <ButtonContainer margin= "0 10px 0 0" onClick={() => setOpenMenu(!openMenu)}>
                    <ButtonIcon alt="" src={HamburguerIcon}/>
                </ButtonContainer>
                <img onClick={() => navigate('/')}
                style={{ cursor: 'pointer', width: '100px', }}
                alt=""
                src={Logo}
                />
            </LogoContainer>
                <SearchContainer>
                <SearchInputContainer>
                    <SearchInput 
                        placeholder="Pesquisar" 
                        type="text"
                        value={searchTerm}
                        onChange={(e) => handleSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === 'Enter'){
                                setSearch(searchTerm);
                                navigate('/search')
                            }
                        }}
                     />
                </SearchInputContainer>
                <SearchButton>
                    <ButtonIcon alt="" src={SearchIcon}/>
                </SearchButton>
                <ButtonContainer margin= "0 0 0 10px">
                    <ButtonIcon alt="" src={VoiceIcon} />
                </ButtonContainer>
            </SearchContainer>
            {login ? 
                <HeaderButtons>
                    <ButtonContainer onClick={() => navigate('/create-video')} margin= "0 0 0 10px">
                        <ButtonIcon alt="" src={VideoIcon} />
                    </ButtonContainer>
                    <ButtonContainer margin= "0 0 0 10px">
                        <ButtonIcon alt="" src={NotificationIcon} />
                    </ButtonContainer>
                    <ButtonContainer onClick={() => handleDropDownMenu()} margin= "0 0 0 10px">
                        <ButtonIcon   alt="" src={UserIcon}/>
                    </ButtonContainer>

                    <DropDownMenu OpenDropDownMenu={OpenDropDownMenu}>
                        <UserContainer>
                            <ButtonChannel>
                                {user && user.nome ? user.nome.charAt(0).toUpperCase(): 'L'}
                            </ButtonChannel>
                            <Name>{user.nome}</Name>
                        </UserContainer>
                        <DropMenuContent OpenDropDownMenu={OpenDropDownMenu}>
                            <Content onClick={() => goBack()}>
                                <ButtonIcon src={GoOut}/>
                                <span>Sair</span>
                            </Content>
                        </DropMenuContent>
                    </DropDownMenu>
                </HeaderButtons>
            :
                    <ButtonLogin onClick={() => navigate('/login')}>
                        <ButtonIcon src={UserIcon}/>
                        <span>Fazer Login</span>
                    </ButtonLogin>
            }
        </Container>
    )
}

export default Header;