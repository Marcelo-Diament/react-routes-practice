import React from 'react'
import PageHeader from '../../components/PageHeader'
import Vitrine from '../../components/Vitrine'
import { getTopics } from '../../api'

const HomePage = () => {
  const topics = getTopics()
  return (
    <>
      <PageHeader title="Home" intro="Um site focado em práticas de React. Confira os tópicos a seguir e seus artigos!" />
      {topics.map((topic, index) => <Vitrine {...topic} key={index} />)}
    </>
  )
}

export default HomePage