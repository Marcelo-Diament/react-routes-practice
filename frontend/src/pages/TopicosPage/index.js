import React from 'react'
import PageHeader from '../../components/PageHeader'
import Vitrine from '../../components/Vitrine'
import { getTopics, getTopicsByName } from '../../api'
import { useParams } from 'react-router-dom'

const TopicosPage = () => {
  let params = useParams()
  const { topicName } = params
  const topics = getTopics()
  const topicsByName = topicName ? getTopicsByName(topicName) : undefined
  return (
    <>
      <PageHeader title="Tópicos" intro="Navegue por tópicos" />
      {
        topicsByName === undefined
          ? topics.map((topic, index) => <Vitrine {...topic} key={index} />)
          : topicsByName.map((topic, index) => <Vitrine {...topic} key={index} />)
      }
    </>
  )
}

export default TopicosPage