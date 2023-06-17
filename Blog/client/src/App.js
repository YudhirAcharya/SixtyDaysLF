import "./App.css";
import Posts from "./Posts";
import Header from "./Header";
import {Route, Routes} from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/indexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
function App() {
  return (
    <Routes>
      <Route path ='/' element={<Layout/>}>
        <Route index element={<IndexPage />} />
        <Route path={'/login'} element ={<LoginPage></LoginPage> } />
        <Route path={'/register'} element={<RegisterPage/>}/>


      </Route>
      
    </Routes>
    
  );
}

export default App;
