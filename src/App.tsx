import { Routes, Route } from 'react-router-dom'
import './App.css';
import HomeNavBar from './components/HomeNavBar';
import CategoriasPage from './pages/CategoriasPage';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import ListaDeLivros from './pages/LivrosPage';
import ResenhasPage from './pages/ResenhasPage';
import NovaResenhaPage from './pages/NovaResenhaPage';
import CadastroPage from './pages/CadastroPage';

function App() {
  return (
    <>
      <HomeNavBar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/categorias' element={<CategoriasPage />} />
        <Route path='/sobre' element={<SobrePage />} />
        <Route path='/livros' element={<ListaDeLivros />} />
        <Route path='/resenhas/:id' element={<ResenhasPage />} />
        <Route path='/novaresenha/:id' element={<NovaResenhaPage />} />
        <Route path='/cadastro' element={<CadastroPage />} />
      </Routes>
    </>
  )
}

export default App;
