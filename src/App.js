import "./App.css";
import Header from "./containers/Header";
import ProductDetail from "./containers/ProductDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./containers/ProductListing";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>

        <Routes>
        <Route path="/" exact element = {<ProductListing />} /> 
        <Route path="/product/:productId" exact element = {<ProductDetail />} />
        <Route>404 Not Found</Route>
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
