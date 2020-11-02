import React from 'react'
import PageHeader from '../../components/PageHeader'
import Vitrine from '../../components/Vitrine'
import { getTopics } from '../../api'

const HomePage = () => {
  const topics = getTopics()
  return (
    <>
      <PageHeader title="Página Inicial" intro="Página principal, com as novidades e destaques" />
      <h1>Home Page</h1>
      {topics.map((topic, index) => <Vitrine {...topic} key={index} />)}
    </>
  )
}

export default HomePage