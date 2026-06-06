import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ClubePage } from './pages/ClubePage';
import { PromocoesPage } from './pages/PromocoesPage';
import { CadastroPage } from './pages/CadastroPage';
import { VarejoPage } from './pages/VarejoPage';
import { AtacadoPage } from './pages/AtacadoPage';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clube" element={<ClubePage />} />
            <Route path="/promocoes" element={<PromocoesPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/varejo" element={<VarejoPage />} />
            <Route path="/atacado" element={<AtacadoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
