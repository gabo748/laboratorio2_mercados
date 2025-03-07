import styled from "styled-components";

const NewsContainer = styled.section`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2c3e50;
  }

  .news-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
  }

  .news-item {
    background: #ecf0f1;
    padding: 1rem;
    border-radius: 8px;
    width: 80%;
    max-width: 600px;
    text-align: left;
  }
`;

const News = () => {
  const newsArticles = [
    { id: 1, title: "Nuevas Vacunas Disponibles", content: "Ya contamos con la última vacuna para la gripe." },
    { id: 2, title: "Consejos de Salud", content: "5 tips para fortalecer tu sistema inmune." },
    { id: 3, title: "Avances en Medicina", content: "Nuevos tratamientos para enfermedades crónicas." },
  ];

  return (
    <NewsContainer>
      <h1>Últimas Noticias</h1>
      <div className="news-list">
        {newsArticles.map((news) => (
          <div key={news.id} className="news-item">
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </div>
        ))}
      </div>
    </NewsContainer>
  );
};

export default News;
