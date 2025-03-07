import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #2c3e50;
  color: white;
  text-align: center;
  padding: 1rem;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2025 Farmacia Gabriel - Todos los derechos reservados</p>
    </FooterContainer>
  );
};

export default Footer;
