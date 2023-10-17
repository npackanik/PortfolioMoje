import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";
import HomePage from "./pages/Home/Home";
import AboutMePage from './pages/AboutMe/AboutMe';
import InfoPage from "./pages/Info/Info";
import PortfolioPage from "./pages/Portfolio/Portfolio";

function App() {

  const content = (
    <Routes>
      <Route path="/" element={
        <HomePage />
      }
      />
      
      <Route path="/o-mnie" element={
        <AboutMePage />
      }
      />

      <Route path="/kontakt" element={
        <InfoPage />
      }
      />

      <Route path="/portfolio" element={
        <PortfolioPage />
      }
      />
    </Routes>
  )

  return (
    <Router>
      <Layout
        header={<Header />}
        content={content}
        footer={<Footer />} />
    </Router>
  );
}

export default App;
