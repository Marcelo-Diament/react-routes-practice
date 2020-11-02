import React from 'react'
import PageHeader from '../../components/PageHeader'
import Vitrine from '../../components/Vitrine'
import { getTopics } from '../../api'

const SobrePage = () => {
  const topics = getTopics()

  return (
    <>
      <PageHeader title="Página Sobre" intro="Página que explana o projeto" />
      <h1>Sobre Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi hic, ipsa blanditiis non eligendi voluptatibus quod itaque? Accusamus laborum itaque, provident vero eveniet totam. Odit exercitationem facilis architecto? Inventore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi hic, ipsa blanditiis non eligendi voluptatibus quod itaque? Accusamus laborum itaque, provident vero eveniet totam. Odit exercitationem facilis architecto? Inventore.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum modi hic, ipsa blanditiis non eligendi voluptatibus quod itaque? Accusamus laborum itaque, provident vero eveniet totam. Odit exercitationem facilis architecto? Inventore.</p>
      {topics.map((topic, index) => <Vitrine {...topic} key={index} />)}
    </>
  )
}

export default SobrePage