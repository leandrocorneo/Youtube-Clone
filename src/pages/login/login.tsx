import { useContext, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Container, ContainerButton, CreateAccount, InputContainer, InputEmail, InputPassword, LoginButton, LoginContainer, Logo, LogoContainer, MessageContainer } from "./styles";
import LogoIcon from "../../assets/google.png";
import { useNavigate } from "react-router-dom";

function Login (){
    const { handleLogin } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    return(
        <Container>
            <LoginContainer>
                <LogoContainer>
                    <Logo src={LogoIcon} />
                </LogoContainer>
                    <h2>Fazer Login</h2>
                    <h4>Prosseguir no YouTube</h4>
                <InputContainer>
                    <InputEmail placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <InputPassword placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </InputContainer>
                <MessageContainer>
                    <span>Não está no seu computador? Use uma janela de navegação privada para fazer login.</span>
                    <a target="_blank" href="https://support.google.com/accounts?p=signin_privatebrowsing&hl=pt-BR" rel="noreferrer">Saiba mais sobre como usar o Modo visitante</a>
                </MessageContainer>
                <ContainerButton>
                    <CreateAccount onClick={() => navigate('/sign-up')}>Criar conta</CreateAccount>
                    <LoginButton onClick={() => handleLogin(email, password)}>Login</LoginButton>
                </ContainerButton>
            </LoginContainer>
        </Container>
    )
}

export default Login;