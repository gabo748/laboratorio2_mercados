import styled from "styled-components";

const ContactContainer = styled.section`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2c3e50;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: 20px auto;
    gap: 10px;
  }

  input, textarea {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
    width: 100%;
  }

  button {
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #2c3e50;
    color: white;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.3s;
  }

  button:hover {
    background-color: #1a252f;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h1>Contacto</h1>
      <p>Envíanos tu consulta y te responderemos lo antes posible.</p>
      <form>
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Correo Electrónico" required />
        <textarea placeholder="Escribe tu mensaje aquí..." rows="5" required />
        <button type="submit">Enviar</button>
      </form>
    </ContactContainer>
  );
};

export default Contact;
