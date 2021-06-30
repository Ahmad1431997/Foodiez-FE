// import { Logo, NavItem, ThemeButton } from "../styles";
import { Container, Nav, Navbar } from "react-bootstrap";
// import darkLogo from "../dark-logo.png";
// import lightLogo from "../light-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (

    <Navbar bg="dark" variant="dark">
    <Container>
    <Link to ="/categories">Categories</Link>
    <Nav className="me-auto">
      <Link to="/ingredients">ingredients</Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
};

export default NavBar;