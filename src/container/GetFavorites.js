import React from 'react'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'
import { fadeIn } from '../styles/animation'
import styled from 'styled-components'
import ListOfFavs from '../components/ListOfFavs'

const GET_FAVORITES = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
export const Img = styled.img`
  ${fadeIn()}
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  object-fit: cover;
  top: 0;
  width: 500px;
`

const renderProp = ({ loading, error, data }) => {
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const { favs = [] } = data
  return <ListOfFavs favs={favs} />
}

const FavWithQuery = ({ id }) => (
  <Query fetchPolicy='network-only' query={GET_FAVORITES} variables={{ id }}>
    {renderProp}
  </Query>
)

export default FavWithQuery
