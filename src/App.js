import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from "./Protected"; // Update the import statement to match the correct filename
import ProductList from "./ProductList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add" element={<Protected Cmp={AddProduct} />} />
          <Route path="/update" element={<Protected Cmp={UpdateProduct} />} />
          <Route path="/" element={<Protected Cmp={ProductList} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
