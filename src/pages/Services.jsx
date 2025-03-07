import styled from "styled-components";
import asesoriaMedicaImg from "../assets/asesoria-medica.jpg";
import entregaDomicilioImg from "../assets/entrega-domicilio.jpg";
import analisisClinicosImg from "../assets/analisis-clinicos.jpg";

const ServicesContainer = styled.section`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2c3e50;
    margin-bottom: 20px;
  }

  .service-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .service-card {
    display: flex;
    align-items: center;
    background: #ecf0f1;
    padding: 1.5rem;
    border-radius: 10px;
    width: 90%;
    max-width: 800px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
    text-align: left;
  }

  .service-card:hover {
    transform: scale(1.02);
  }

  .service-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 20px;
  }

  .service-info {
    flex: 1;
  }

  h3 {
    font-size: 1.5rem;
    color: #34495e;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
  }

  /* Responsividad */
  @media (max-width: 600px) {
    .service-card {
      flex-direction: column;
      text-align: center;
    }

    .service-image {
      margin-bottom: 10px;
      margin-right: 0;
    }
  }
`;

const Services = () => {
  const services = [
    {
      id: 1,
      name: "Asesoría Médica",
      description: "Consulta con expertos en salud desde la comodidad de tu hogar. Nuestros especialistas te brindarán la mejor orientación.",
      image: asesoriaMedicaImg
    },
    {
      id: 2,
      name: "Entrega a Domicilio",
      description: "Recibe tus medicamentos en la puerta de tu casa de manera rápida y segura. Servicio disponible en toda la ciudad.",
      image: entregaDomicilioImg
    },
    {
      id: 3,
      name: "Análisis Clínicos",
      description: "Realiza exámenes de laboratorio con resultados rápidos y confiables. Trabajamos con los mejores laboratorios certificados.",
      image: analisisClinicosImg
    }
  ];

  return (
    <ServicesContainer>
      <h1>Nuestros Servicios</h1>
      <div className="service-list">
        {services.map((service) => (
          <div key={service.id} className="service-card">
            <img src={service.image} alt={service.name} className="service-image" />
            <div className="service-info">
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;
