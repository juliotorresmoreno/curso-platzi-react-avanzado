import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import ListOfCategories from '../components/ListOfCategories'
import ListOfPhotoCards from '../container/ListOfPhotoCard'

const Home = (props) => {
  const params = useParams()
  const { id } = params
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con Petgram puedes encontrar fotos de animales domésticos muy bonitos'>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={id} />
    </Layout>
  )
}

export default Home
