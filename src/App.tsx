import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Inscricoes from "./pages/inscricoes/insricoes";
import Shorts from "./pages/shorts/shorts";
import Voce from "./pages/você/voce";
import Historico from "./pages/historico/historico";
import { UserStorage } from "./contexts/userContext";
import Login from "./pages/login/login";
import SignUp from "./pages/sign-up/sign-up";
import Search from "./pages/search/search";


function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/shorts" element={<Shorts />} />
          <Route path="/inscricoes" element={<Inscricoes />} />
          <Route path="/create-video" element={<Voce />}/>
          <Route path="/history" element={<Historico />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/sign-up" element={<SignUp />}/>
          <Route path="/search" element={<Search />} />
        </Routes>
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
