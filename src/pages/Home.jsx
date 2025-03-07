import styled from "styled-components";
import backgroundImage from "../assets/farmacia-background.jpg"; // 👈 Importa la imagen correctamente

const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  background: url(${backgroundImage}) center/cover no-repeat;
`;

const ContentBox = styled.div`
  background: rgba(0, 0, 0, 0.7); /* Fondo oscuro semitransparente */
  padding: 2rem;
  border-radius: 10px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  max-width: 600px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: bold;
  }

  p {
    font-size: 1.2rem;
    opacity: 0.9;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <ContentBox>
        <h1>Bienvenido a la Farmacia Gabriel</h1>
        <p>Tu salud es nuestra prioridad.</p>
      </ContentBox>
    </HomeContainer>
  );
};

export default Home;
