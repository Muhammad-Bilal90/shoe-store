import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./GlobalContext/GlobalContext";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalProvider>
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Products/:slug" element={<ProductDetails />} />
          </Routes>
        </GlobalProvider>
      </Router>
    </div>
  );
}

export default App;
