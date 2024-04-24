import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
// import Header from './Header';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Protected from './Protected'; // Update the import statement to match the correct filename
  function App() {
  return (
    <div className='App'>
     <Router> 
      {/* <Header/> */}
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      <Routes>
        <Route path='/add' element={<Protected Cmp={AddProduct}/>}></Route>
      </Routes>
      <Routes>
        <Route path='/update' element={<Protected Cmp={UpdateProduct}/>}></Route>
      </Routes>
     </Router>
    </div>
  )
}

export default App;