import React from 'react';
import './NewsGrid.css';

const NewsGrid = ({ articles }) => (
  <section className="news-grid">
    {articles.map((article, index) => (
      <article key={index} className="news-card">
        <img src={article.urlToImage} alt={article.title} />
        <h2>{article.source.name}</h2>
        <p>{article.title}</p>
        <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
      </article>
    ))}
  </section>
);

export default NewsGrid;
