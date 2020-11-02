import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.svg'
import './style.css'

const Artigo = (activeArticle) => {
  const {
    id,
    author,
    categoryName,
    createdAt,
    description,
    excerpt,
    image,
    intro,
    title,
    updatedAt
  } = activeArticle

  return (
    <article className={`article-item article-id-${id} article-category-${categoryName}`}>
      <header className="article-item-header">
        <h2 className="article-item-header-title">{title}</h2>
        {
          image === ''
            ? (
              <div className="article-item-header-image" style={{ backgroundImage: `url('${logo}')`, backgroundSize: 240  }}></div>
            )
            : (
              <div className="article-item-header-image" style={{ backgroundImage: `url('${image}')` }}></div>
            )
        }
        <small><Link to={`/topicos/${categoryName}`} className="article-item-header-category article-categoryName">{categoryName}</Link></small>
        <p className="article-item-header-intro"><small><i>{intro}</i></small></p>
      </header>
      <hr className="article-item-divisor" />
      <div className="article-item-content">
        <p className="article-item-content-meta">
          <i>Por <span className={`article-item-header-meta-author article-author`}>{author}</span>, <span className={`article-item-header-meta-date-create article-createdAt`}>{createdAt}</span>.
          <br />Atualizado em <span className={`article-item-header-meta-date-update article-updatedAt`}>{updatedAt}</span>.</i>
        </p>
        <div className="article-item-content-tldr">
          <h3 className="article-item-content-tldr-subtitle">TL;DR</h3>
          <p className="article-item-content-tldr-paragraph article-excerpt">{excerpt}</p>
        </div>
        <p className="article-item-content-paragraph article-description">{description}</p>
      </div>
      <footer className="card-item-footer">
        <Link to={`/topicos/${categoryName}`} className="article-item-footer-category article-categoryName">Ler mais sobre {categoryName}</Link>
      </footer>
    </article>
  )
}

export default Artigo