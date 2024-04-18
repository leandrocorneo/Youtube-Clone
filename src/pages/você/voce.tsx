
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import Menu from "../../components/menu";
import Header from "../../components/header";
import { Title, InputContainer, Description, CreateVideo, MainContainer, Container, ContainerButton, CloseTable, OpenTable, ContainerLogin, LibraryIcon, ContainerInfos } from "./styles";
import { ButtonIcon, ButtonLogin } from "../../components/header/styles";
import You from "../../assets/marketing-de-video.png";
import UserIcon from "../../assets/user.png";
import { useNavigate } from "react-router-dom";


function Voce() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const { handleCreateVideo } = useContext(UserContext);
    const { login, openVideoTable, setOpenVideoTable } = useContext(UserContext);
    const navigate = useNavigate();

    const OpenVideoTable = () => {
        setOpenVideoTable(!openVideoTable);
    }

    const validateInput = () => {
        if (title.trim() === '' || description.trim() === '') {
            alert('Por favor, preencha o título e a descrição antes de criar o vídeo.');
            return false;
        }
        return true;
    };

    return(
        <MainContainer>
            <Header />
            <Menu />
            {login ?
            <Container>
                {openVideoTable ?                           
                <InputContainer>
                    <Title
                        type="text"
                        placeholder="Thumbnail:"
                        required
                    />
                    <Title
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Título:"
                        required
                        />
                    <Description
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Descrição:"
                            required
                        />
                        <ContainerButton>
                            <CloseTable onClick={() => OpenVideoTable()}>Fechar</CloseTable>
                            <CreateVideo onClick={() => 
                                {if (validateInput()){handleCreateVideo(title, description);}}}>
                                Criar
                            </CreateVideo>
                        </ContainerButton>
                </InputContainer>
                :
                <ContainerInfos>
                    <h1>Aqui você pode criar seus vídeos!</h1>
                    <OpenTable onClick={() => OpenVideoTable()}>Crie seu vídeo</OpenTable>
                </ContainerInfos>
                } 
            </Container>
            :
            <ContainerLogin>
                <LibraryIcon src={You}/>
                <h1>É necessário fazer login para criar seus vídeos</h1>
                <ButtonLogin onClick={() => navigate('/login')}>
                    <ButtonIcon src={UserIcon}/>
                    <span>Fazer Login</span>
                </ButtonLogin>
            </ContainerLogin>
            }
        </MainContainer>
    )
}

export default Voce;