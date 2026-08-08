import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { SkipLink } from './components/layout/SkipLink';
import { PageMeta } from './components/seo/PageMeta';
import { JsonLd } from './components/seo/JsonLd';
import { HomePage } from './pages/HomePage';
import { ClubePage } from './pages/ClubePage';
import { PromocoesPage } from './pages/PromocoesPage';
import { CadastroPage } from './pages/CadastroPage';
import { VarejoPage } from './pages/VarejoPage';
import { AtacadoPage } from './pages/AtacadoPage';
import { TermosPage } from './pages/TermosPage';
import { PrivacidadePage } from './pages/PrivacidadePage';
import { LojasPage } from './pages/LojasPage';

function App() {
  return (
    <BrowserRouter>
      <PageMeta />
      <JsonLd />
      <div className="flex min-h-screen flex-col">
        <SkipLink />
        <Header />
        <main id="main" className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/clube" element={<ClubePage />} />
            <Route path="/promocoes" element={<PromocoesPage />} />
            <Route path="/cadastro" element={<CadastroPage />} />
            <Route path="/varejo" element={<VarejoPage />} />
            <Route path="/atacado" element={<AtacadoPage />} />
            <Route path="/termos" element={<TermosPage />} />
            <Route path="/privacidade" element={<PrivacidadePage />} />
            <Route path="/lojas" element={<LojasPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
