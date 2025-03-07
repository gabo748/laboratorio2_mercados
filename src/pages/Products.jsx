import styled from "styled-components";
import paracetamolImg from "../assets/parecetamol.jpg";
import ibuprofenoImg from "../assets/ibuprofeno.png";
import omeprazolImg from "../assets/omeprazol.png";
import amoxicilinaImg from "../assets/amoxicilina.png";
import loratadinaImg from "../assets/loratadina.jpg";
import vitaminaCImg from "../assets/vitamina-c.jpg";

const ProductsContainer = styled.section`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2c3e50;
  }

  .product-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3 columnas */
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
  }

  .product-card {
    background: #ecf0f1;
    padding: 1.5rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out;
  }

  .product-card:hover {
    transform: scale(1.05);
  }

  .product-image {
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  h3 {
    font-size: 1.3rem;
    color: #34495e;
  }

  p {
    font-size: 1rem;
    color: #555;
    line-height: 1.4;
  }

  /* Responsividad: 2 columnas en tablets y 1 en móviles */
  @media (max-width: 900px) {
    .product-list {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    .product-list {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Paracetamol",
      description: "Alivia el dolor y la fiebre. Se usa comúnmente para tratar dolores de cabeza, resfriados y fiebre alta.",
      image: paracetamolImg
    },
    {
      id: 2,
      name: "Ibuprofeno",
      description: "Antiinflamatorio y analgésico. Ayuda a reducir la inflamación, aliviar dolores musculares y tratar la fiebre.",
      image: ibuprofenoImg
    },
    {
      id: 3,
      name: "Omeprazol",
      description: "Protección gástrica. Se usa para tratar problemas de acidez, úlceras y reflujo gástrico.",
      image: omeprazolImg
    },
    {
      id: 4,
      name: "Amoxicilina",
      description: "Antibiótico de amplio espectro. Se usa para tratar infecciones bacterianas en el sistema respiratorio, urinario y digestivo.",
      image: amoxicilinaImg
    },
    {
      id: 5,
      name: "Loratadina",
      description: "Antihistamínico para alergias. Reduce los síntomas de la rinitis alérgica y otras reacciones alérgicas.",
      image: loratadinaImg
    },
    {
      id: 6,
      name: "Vitamina C",
      description: "Refuerzo del sistema inmunológico. Ayuda a prevenir resfriados, mejorar la piel y fortalecer el sistema inmune.",
      image: vitaminaCImg
    }
  ];

  return (
    <ProductsContainer>
      <h1>Nuestros Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </ProductsContainer>
  );
};

export default Products;
