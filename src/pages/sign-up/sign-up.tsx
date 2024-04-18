import { useContext, useState } from "react";
import { Container, ContainerButton, InputContainer, InputEmail, InputPassword, InputUserName, LoginButton, LoginContainer, Logo, LogoContainer, MessageContainer, NextStage } from "./styles";
import { UserContext } from "../../contexts/userContext";
import { useNavigate } from "react-router-dom";
import LogoIcon from "../../assets/google.png";

function SignUp (){
    const [name, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { handleCreateUser } = useContext(UserContext);

    return(
        <Container>
        <LoginContainer>
            <LogoContainer>
                <Logo src={LogoIcon} />
            </LogoContainer>
            <h2>Crie uma conta do Google</h2>
            <h4>Insira seus dados</h4>
            <InputContainer>
                <InputUserName placeholder="Nome" value={name} onChange={(e) => setUserName(e.target.value)}/>
                <InputEmail placeholder="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <InputPassword placeholder="Senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputContainer>
            <ContainerButton>
                <LoginButton onClick={() => navigate('/login')}>Faça login em vez disso</LoginButton>
                <NextStage onClick={() => handleCreateUser(email, password, name)}>Avançar</NextStage>
            </ContainerButton>
        </LoginContainer>
    </Container>
    )
}

export default SignUp;