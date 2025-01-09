
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Features from './Components/Pages/Features';
import About from './Components/Pages/About';
import MyComponent from './Components/Pages/MyComponent';
import TeamSection from './Components/Pages/TeamSection';
import OfferSection from './Components/Pages/OfferSection';
import Footer from './Components/Header/Footer';
import ScrollToTop from './Components/Pages/ScrollToTop';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Features />
              <About />
              <MyComponent />
              <TeamSection />
              <OfferSection />
            </>
          }
        />
        <Route path="/About" element={
          <>
          
          <Features></Features>
          <MyComponent/>
          </>
        } />
        <Route path="/Services" element={<About></About> } />
        <Route path="/Contact" element={
          <>
          
          <TeamSection/>
          <OfferSection/>
          </>
        } />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
