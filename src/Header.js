// import Navbar  from 'react-bootstrap/navbar';
// import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt } from "react-icons/fa"; // Importing the Sign Out icon from react-icons/fa

function Header() {
  let user = JSON.parse(localStorage.getItem('user-info'))
  const navigate = useNavigate();
  function logout() {
    localStorage.clear();
    navigate("/register");

  }
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">E-Comm</Navbar.Brand>
        <Nav className="mr-auto navbar_warapper">
          {localStorage.getItem("user-info") ? (
            <>
              <Link to="/add">Add Products</Link>
              <Link to="/update">Update Products</Link>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </Nav>

        {localStorage.getItem("user-info") ?
        <Nav className="margin"> {/* Use ml-auto class to push the NavDropdown to the right */}
            <NavDropdown  title={user && user.name}>
          <NavDropdown.Item href="#" onClick={logout}>
           <FaSignOutAlt /> Logout
          </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        :null
        }
        
      </Navbar>
    </div>
  );
}
export default Header;



