import { BrowserRouter, Route, Routes } from "react-router-dom"
import MoviePage from "./views/MoviePage/MoviePage"
import Header from "./elements/js/Header"
import Footer from "./elements/js/Footer"
import './Main.css'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/movie" element={<MoviePage/>}/>
      </Routes>    
      <Footer/>
    </BrowserRouter> 
  )
}

export default App;
