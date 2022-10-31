import React, { Suspense } from 'react'
import GlobalStyle from './styles/GlobalStyles'
import Logo from './components/Logo'

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import NotRegisteredUser from './pages/NotRegisteredUser'
import Context from './Context'
import NotFound from './pages/NotFound'

const Home = React.lazy(() => import('./pages/Home'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const Detail = React.lazy(() => import('./pages/Detail'))

const Protected = ({ children }) => (
  <Context.Consumer>
    {({ isAuth }) => (isAuth ? children : <Navigate to='/login' />)}
  </Context.Consumer>
)

const App = () => {
  return (

    <Router>
      <GlobalStyle />
      <Logo />

      <Suspense fallback={<>Loading...</>}>
        <Routes>
          <Route path='/pet/:id' element={<Home />} />
          <Route path='/detail/:detailId' element={<Detail />} />

          <Route path='/user' element={<Protected><User /></Protected>} />
          <Route path='/favs' element={<Protected><Favs /></Protected>} />

          <Route path='/login' element={<NotRegisteredUser />} />

          <Route path='/' element={<Home />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>

      <NavBar />
    </Router>
  )
}

export default App
