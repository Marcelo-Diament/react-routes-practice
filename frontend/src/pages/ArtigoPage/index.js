import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Artigo from '../../components/Artigo'
import { cleanString } from '../../utils'
import { getArticleByName, getArticlesByCategoryName, getTopics } from '../../api'
import { useParams, Link } from 'react-router-dom'
import './style.css'

const ArtigoPage = () => {
  let params = useParams()
  const { topico, artigo } = params

  const topics = getTopics()

  const [activeTopicName, setActiveTopicName] = useState('')
  useEffect(() => {
    setActiveTopicName(topico)
  }, [topico])

  const [activeArticle, setActiveArticle] = useState()
  useEffect(() => {
    let currentArticle = getArticleByName(artigo)
    setActiveArticle(currentArticle[0])
  }, [artigo])

  const [activeArticleName, setActiveArticleName] = useState('')
  useEffect(() => {
    activeArticle
      ? setActiveArticleName(activeArticle.title)
      : setActiveArticleName(artigo)
  }, [activeArticle, artigo])

  const [activeRelatedArticles, setActiveRelatedArticles] = useState(getArticlesByCategoryName(topico))
  useEffect(() => {
    let freshRelatedArticles = getArticlesByCategoryName(topico)
    setActiveRelatedArticles(freshRelatedArticles)
  }, [topico])

  return (
    <>
      <PageHeader title={`${activeArticleName ? activeArticleName : 'Artigo não identificado'}`} intro={`Conheça e entenda ${activeArticleName} | ${activeTopicName}`} />
      <Artigo {...activeArticle} />
      <nav className="aside-nav articles">
        <h2 className="aside-nav-title">Mais sobre {activeTopicName}</h2>
        <ul className="aside-nav-articles">
          {activeRelatedArticles.map((article, index) => {
            return cleanString(article.title, true) !== cleanString(activeArticleName, true) && (
              <li key={index} className="aside-nav-articles-item">
                <h3 className="aside-nav-articles-item-title">{article.title}</h3>
                <p className="aside-nav-articles-item-intro">{article.intro}</p>
                <Link
                  to={`/topicos/${activeTopicName}/${article.slug}`}
                  className={`btn aside-nav-articles-item-link ${cleanString(article.title, true, true)}`}
                >
                  Ler
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <nav className="aside-nav topics">
        <h2 className="aside-nav-title">Confira outros tópicos</h2>
        <ul className="aside-nav-topics">
          {topics.map((topic, index) => {
            return cleanString(topic.title, true) !== cleanString(activeTopicName, true) && (
              <li key={index} className="aside-nav-topics-item">
                <Link to={`/topicos/${topic.slug}`} className={`btn aside-nav-topics-item-link ${cleanString(topic.title, true, true)}`}>{topic.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default ArtigoPage