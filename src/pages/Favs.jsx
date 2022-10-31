import React from 'react'
import Layout from '../components/Layout'
import FavWithQuery from '../container/GetFavorites'

const Favs = () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <FavWithQuery />
  </Layout>
)

export default Favs
