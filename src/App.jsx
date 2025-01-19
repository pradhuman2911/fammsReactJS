
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import {BrowserRouter ,Route ,Routes} from "react-router-dom";
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Products from './components/products/Products';
import TestimonialPage from './components/testimonial/TestimonialPage';
import About from './components/about/About';
const App = ()=>{

  return(
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Hero/>} />
    <Route path="/products" element={<Products/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/testimonial" element={<TestimonialPage/>} />
    <Route path="/about" element={<About/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>

    </>
  )
}

export default App;