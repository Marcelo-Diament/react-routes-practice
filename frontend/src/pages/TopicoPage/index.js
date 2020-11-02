import React, { useEffect, useState } from 'react'
import PageHeader from '../../components/PageHeader'
import Vitrine from '../../components/Vitrine'
import { cleanString } from '../../utils'
import { getTopics, getTopicsByName } from '../../api'
import { useParams, Link } from 'react-router-dom'
import './style.css'

const TopicoPage = () => {
  let params = useParams()
  const { topico } = params
  const topics = getTopics()

  const [activeTopicName, setActiveTopicName] = useState('')
  useEffect(() => {
    topico && setActiveTopicName(topico)
  }, [topico])

  const topicsByName = getTopicsByName(activeTopicName)

  return (
    <>
      <PageHeader title={`Tópico${activeTopicName ? ': ' + activeTopicName : ''}`} intro={`Confira os artigos sobre ${activeTopicName}`} />
      {topicsByName.map((topic, index) => <Vitrine {...topic} key={index} />)}
      <nav className="aside-nav topics">
        <h2 className="aside-nav-title">Confira outros tópicos</h2>
        <ul className="aside-nav-topics">
          {topics.map((topic, index) => {
            return topic.title.toLowerCase() !== activeTopicName.toLocaleLowerCase() && (
              <li key={index} className="aside-nav-topics-item">
                <Link to={`/topicos/${topic.slug}`} className={`btn aside-nav-topics-item-link ${cleanString(topic.title)}`}>{topic.title}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </>
  )
}

export default TopicoPage