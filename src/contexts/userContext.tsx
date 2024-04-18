import { createContext, useEffect, useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as any);

export const UserStorage = ({children} : any) => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState({});
  const [token, setToken] = useState(localStorage.getItem('token') as string);
  const [userId, setUserId] = useState("");
  const navigate = useNavigate()
  const [OpenDropDownMenu, setDropDownMenu] = useState(false);
  const [openVideoTable, setOpenVideoTable] = useState(false);


  const getUser = (token: string) => {
    api.get('/user/get-user', {headers: {Authorization: token}}).then(({ data }) => {
      setUser(data.user);
      setUserId(data.user.id);
      setLogin(true);
    }).catch((error) => {
      console.log('usuário não autenticado', error)
    })
  }

  useEffect(() => {
    getUser(token)
  }, [token])
  

  const logOut = () =>{
    localStorage.removeItem('token');
    setLogin(false);
    setUser({});
  }

  const handleLogin = (email: string, password: string) => {
    api.post('/user/sign-in', {email, password}).then(({ data }) => {
      setLogin(true);
      localStorage.setItem('token', data.token);
      setToken(data.token);
      navigate('/')
    }).catch((error) => {
      console.log('Não foi possível fazer o login', error);
      alert('Usuário ou senha incorretos. Verifique os dados e tente novamente.')
    })
    }

  const handleCreateUser = (email: string, password: string, name: string) => {
    api.post('/user/sign-up', {email,password,name}).then(() => {
      alert('Usuário criado com sucesso')
      handleLogin(email, password);
      navigate('/')
    }).catch((error) => {
      console.log('Não foi possível criar novo usuário', error);
    })
    }

    const handleCreateVideo = (title: string, description: string) => {
        api.post(`/videos/create-video`, { title, description, user_id: userId }, { headers: { Authorization: token } }).then(() => {
        alert('Vídeo criado com sucesso');
      }).catch((error) => {
          ('Erro ao enviar o vídeo')
    })
  }

  return (
    <UserContext.Provider value={{
      login,
      user,
      handleLogin,
      token,
      logOut,
      handleCreateUser,
      OpenDropDownMenu, 
      setDropDownMenu,
      handleCreateVideo,
      openVideoTable,
      setOpenVideoTable
    }}>
      {children}
    </UserContext.Provider>
  )
}