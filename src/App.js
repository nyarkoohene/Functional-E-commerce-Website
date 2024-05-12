import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom"; 
import Shop from "./components/Pages/Shop";
import ShopCategory from "./components/Pages/ShopCategory";
import Product from "./components/Pages/Product";
import Cart from "./components/Pages/Cart";
import LoginSignup from "./components/Pages/LoginSignup";
import Footer from "./components/Footer/Footer";
import mens_banner from './components/assets/banner_mens.png'
import womens_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'
function App() {
    return (
      <div >
        <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element={<Shop/>}/>
            <Route path="/men" element={<ShopCategory banner={mens_banner} category="men"/>}/>
            <Route path="/women" element={<ShopCategory banner={womens_banner} category="women"/>}/>
            <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kid"/>}/>
             <Route path="/product" element={<Product/>}>
              <Route path="productId" element={<Product/>}/>
             </Route>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/loginsignup" element={<LoginSignup/>}/> 
          </Routes>
          <Footer/> 
        </BrowserRouter>
      </div>
    );
  }
  
  export default App;
  
