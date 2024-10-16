import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import './App.css'
import NotFound from './components/NotFound/index'

const Login = React.lazy(() => import('./components/Login'))
const Home = React.lazy(() => import('./components/Home'))
const Popular = React.lazy(() => import('./components/Popular'))
const MovieItemDetails = React.lazy(() =>
  import('./components/MovieItemDetails'),
)
const Search = React.lazy(() => import('./components/Search'))
const Account = React.lazy(() => import('./components/Account'))

const App = () => (
  <Switch>
    <Route
      exact
      path="/login"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <Login />
        </React.Suspense>
      )}
    />
    <Route
      exact
      path="/"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <Home />
        </React.Suspense>
      )}
    />
    <Route
      exact
      path="/popular"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <Popular />
        </React.Suspense>
      )}
    />
    <Route
      exact
      path="/movies/:id"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <MovieItemDetails />
        </React.Suspense>
      )}
    />
    <Route
      exact
      path="/search"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <Search />
        </React.Suspense>
      )}
    />
    <Route
      exact
      path="/account"
      render={() => (
        <React.Suspense
          fallback={
            <div className="loader-container" data-testid="loader">
              <Loader type="TailSpin" color="#D81F26" height={50} width={50} />
            </div>
          }
        >
          <Account />
        </React.Suspense>
      )}
    />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
