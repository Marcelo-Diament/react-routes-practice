import React from 'react'
import { getArticles, getArticlesByCategoryName } from '../../api'
import { cleanString } from '../../utils'
import logo from '../../logo.svg'
import './style.css'

const Vitrine = (topic = undefined) => {
  const articles = topic ? getArticlesByCategoryName(topic.title) : getArticles()
  return (
    <section className="vitrine">
      <h1 className="vitrine-title">{topic.title}</h1>
      <div className="vitrine-container">
        {articles.map((article, index) => (
          <div className="card-container" key={index}>
            <article className={`card-item article-id-${article.id} article-category-${topic.categoryName}`}>
              <header className="card-item-header">
                <h2 className="card-item-header-title">{article.title}</h2>
                {
                  article.image === ''
                    ? (
                      <div className="card-item-header-image" style={{ backgroundImage: `url('${logo}')`, backgroundSize: 240 }}></div>
                    )
                    : (
                      <div className="card-item-header-image" style={{ backgroundImage: `url('${article.image}')` }}></div>
                    )
                }
                <a href={`/topicos/${cleanString(article.categoryName)}`} className="card-item-header-category article-categoryName">{article.categoryName}</a>
                <p className="card-item-header-meta">Publicado em <span className={`card-item-header-meta-date-create article-createdAt`}>{topic.createdAt}</span> por <span className={`card-item-header-meta-author article-author`}>{article.author}</span>. Última atualização em <span className={`card-item-header-meta-date-update article-updatedAt`}>{article.updatedAt}</span>.</p>
              </header>
              <div className="card-item-content">
                <p className="card-item-content-paragraph article-excerpt">{article.excerpt}</p>
              </div>
              <footer className="card-item-footer">
                <a href={`/topicos${article.link}`} className="card-item-footer-cta article-link btn">Ver mais</a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Vitrine