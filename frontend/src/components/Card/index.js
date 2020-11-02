import React from 'react'
import { Link } from 'react-router-dom'
import { cleanString } from '../../utils'
import logo from '../../logo.svg'
import './style.css'

const Card = (article) => {
  const {
    id,
    author,
    categoryName,
    createdAt,
    excerpt,
    image,
    link,
    title,
    updatedAt
  } = article

  return (
    <div className="card-container">
      <article className={`card-item article-id-${id} article-category-${categoryName}`}>
        <header className="card-item-header">
          <h2 className="card-item-header-title">{title}</h2>
          {
            image === ''
              ? (
                <div className="card-item-header-image" style={{ backgroundImage: `url('${logo}')`, backgroundSize: 240 }}></div>
              )
              : (
                <div className="card-item-header-image" style={{ backgroundImage: `url('${image}')` }}></div>
              )
          }
          <Link to={`/topicos/${cleanString(categoryName,true)}`} className="card-item-header-category article-categoryName">{categoryName}</Link>
          <p className="card-item-header-meta">Publicado em <span className={`card-item-header-meta-date-create article-createdAt`}>{createdAt}</span> por <span className={`card-item-header-meta-author article-author`}>{author}</span>. Última atualização em <span className={`card-item-header-meta-date-update article-updatedAt`}>{updatedAt}</span>.</p>
        </header>
        <div className="card-item-content">
          <p className="card-item-content-paragraph article-excerpt">{excerpt}</p>
        </div>
        <footer className="card-item-footer">
          <Link to={link} className="card-item-footer-cta article-link btn">Ver mais</Link>
        </footer>
      </article>
    </div>
  )
}

export default Card