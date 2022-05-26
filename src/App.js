import Layout from "./components/layout/Layout";
import EnterGame from "./pages/EnterGame";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Game from "./pages/Game";
import ChooseRoom from "./pages/ChooseRoom"

function App() {
  return (
    <div> 
      <Layout>
          <Routes>
            <Route path="" element={<EnterGame />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/game" element={<Game/>} />
            <Route path="/rooms" element={<ChooseRoom/>} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
