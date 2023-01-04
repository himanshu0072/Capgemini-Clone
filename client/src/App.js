import { Route, Routes } from 'react-router-dom';
import Industries from './Components/Industry/Industries';
import Insight from './Components/Insight';
import Navbar from './Components/Navbar';
import News from './Components/News';
import Links from './Components/Links';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import Services from './Components/ServicePage';
import About from './Components/About';
import Careers from './Components/career/Careers';
import ContactUs from './Components/ContactUs';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="industries" element={<Industries />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="insights" element={<Insight />} />
        <Route path="news" element={<News />} />
        <Route path="services" element={<Services />} />
        <Route path="about" element={<About />} />
        <Route path="career" element={<Careers />} />
      </Routes>

      <Links />
      <Footer />
    </>
  );
}
export default App;
