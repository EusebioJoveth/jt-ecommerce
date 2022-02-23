
import Carrinho from "./pages/Carrinho";
import Login from "./pages/Login";
import Produto from "./pages/Produto";
import ProdutoList from "./pages/ProdutoList";
import Registo from "./pages/Registo";
import Home from "./pages/Home";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (   
    <BrowserRouter>
     <Routes>
     <Route path="/" element={ <Home/>} />
     <Route path="/produto/:categoria" element={ <ProdutoList/>} />
     <Route path="/produto/:id" element={ <Produto/>} />
     <Route path="/carrinho" element={ <Carrinho/>} />
     <Route path="/login"
      element={ user?<Navigate to="/" />: <Login />} />
     <Route path="/registo"
      element={ user?<Navigate to="/" />: <Registo />} />
   </Routes>
    </BrowserRouter>
  );
}

export default App;
