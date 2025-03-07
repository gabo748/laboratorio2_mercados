import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;

  ul {
    list-style: none;
    display: flex;
    gap: 20px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <h1>Farmacia Gabriel</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/productos">Productos</Link></li>
        <li><Link to="/servicios">Servicios</Link></li>
        <li><Link to="/noticias">Noticias</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </NavbarContainer>
  );
};

export default Navbar;
