import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviePage from "./views/MoviePage/MoviePage"
import LoginPage from "./views/LoginPage/LoginPage"
import RegisterPage from "./views/RegisterPage/RegisterPage"
import Header from "./elements/js/Header"
import Footer from "./elements/js/Footer"
import './Main.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/movie" element={<MoviePage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>    
      <Footer/>
    </BrowserRouter> 
  )
}

export default App;
