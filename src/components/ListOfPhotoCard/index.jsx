import React from 'react'
import PhotoCard from '../PhotoCard'

const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
export default ListOfPhotoCardsComponent
