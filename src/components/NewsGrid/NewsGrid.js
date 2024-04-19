// import React from 'react';
// import './NewsGrid.css';

// const NewsGrid = ({ articles }) => (
//   <section className="news-grid">
//     {articles.map((article, index) => (
//       <article key={index} className="news-card">
//         <img src={article.urlToImage} alt={article.title} />
//         <h2>{article.source.name}</h2>
//         <p>{article.title}</p>
//         <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
//         <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
//       </article>
//     ))}
//   </section>
// );

// export default NewsGrid;


import React from 'react';
import './NewsGrid.css';

const NewsGrid = ({ articles }) => (
  <section className="news-grid">
    {articles.map((article, index) => (
      <article key={index} className="news-card">
        <img src={article.urlToImage} alt={article.title} className="card-image" />
        <div className="card-body">
          <h2 className="card-title">{article.source.name}</h2>
          <p className="card-text">{article.title}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer" className="card-link">Read more</a>
          <span className="card-date">{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </article>
    ))}
  </section>
);

export default NewsGrid;
