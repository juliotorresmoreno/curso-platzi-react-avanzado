import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import PhotoCardWithQuery from '../container/PhotoCardWithQuery'

const Detail = () => {
  const params = useParams()
  const { detailId } = params
  return (
    <Layout title={`Fotografía ${detailId}`}>
      <PhotoCardWithQuery id={detailId} />
    </Layout>
  )
}

export default Detail
