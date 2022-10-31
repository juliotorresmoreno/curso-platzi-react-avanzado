import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { createRoot } from 'react-dom/client'

import App from './App'
import Context, { useInitialValue } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server-juliotorresmoreno.vercel.app/graphql',
  request: (operation) => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: (error) => {
    const { networkError } = error
    console.log(error)
    if (error.response.errors[0].message === 'user does not exist') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

const container = document.getElementById('app')
const root = createRoot(container)

const Root = () => {
  const initialValue = useInitialValue()
  return (
    <Context.Provider value={initialValue}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Context.Provider>
  )
}

root.render(<Root />)
