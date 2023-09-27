import Header from "./containers/Header";
import ProductListing from "./containers/ProductListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./containers/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
