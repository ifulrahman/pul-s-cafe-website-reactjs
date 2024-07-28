import Navbar from "./components/Navbar.jsx";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Highlight from "./components/Highlight.jsx";
import MenuHighlight from './components/MenuHighlight.jsx';
import Promo from "./components/Promo.jsx";
import Tagline from "./components/Tagline.jsx";
import Contact from "./components/Contact.jsx";
import Location from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import coffeeCup from './assets/highlight-1.png'; 
import coffeeVariety from './assets/highlight-2.png';
import takeAway from './assets/highlight-3.png'; 
import tasteGuarantee from './assets/highlight-4.png';

function App() {
  const navList = ['Home', 'About', 'Location', 'Menu']
  const highlights = [
    {
      img: coffeeCup,
      text: 'Kopi berkualitas dengan berbagai variasi biji kopi'
    },
    {
      img: coffeeVariety,
      text: 'Pilihan kopi dan pastry yang lezat'
    },
    {
      img: takeAway,
      text: 'Tersedia kopi untuk dibawa pulang'
    },
    {
      img: tasteGuarantee,
      text: 'Jaminan rasa yang enak (Mantul Mantap Betul)'
    }
  ];

  return (
    <>
      <Navbar list={navList}/>
      <Header />
      <About />
      <Highlight highlights={highlights}/>
      <MenuHighlight />
      <Promo />
      <Tagline />
      <Contact />
      <Location />
      <Footer />
    </>
  )
}

export default App;
