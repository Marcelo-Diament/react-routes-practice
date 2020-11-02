import React from 'react'
import Card from '../Card'
import { getArticles, getArticlesByCategoryName } from '../../api'
import './style.css'

const Vitrine = (topic = undefined) => {
  const articles = topic ? getArticlesByCategoryName(topic.title) : getArticles()
  return (
    <section className="vitrine">
      <h1 className="vitrine-title">{topic.title}</h1>
      <div className="vitrine-container">
        {articles.map((article, index) => <Card {...article} key={index} />)}
      </div>
    </section>
  )
}

export default Vitrine