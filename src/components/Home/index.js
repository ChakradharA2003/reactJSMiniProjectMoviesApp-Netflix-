import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Header from '../Header/index'
import ImageSlide from '../ImageSlide/index'
import './index.css'

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [originalsMovies, setOriginalsMovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const trendingApi = 'https://apis.ccbp.in/movies-app/trending-movies'
      const topRatedApi = 'https://apis.ccbp.in/movies-app/top-rated-movies'
      const originalsApi = 'https://apis.ccbp.in/movies-app/originals'
      const jwtToken = Cookies.get('jwt_token')
      const options = {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
      const trendingResponse = await fetch(trendingApi, options)
      const topRatedResponse = await fetch(topRatedApi, options)
      const originalsResponse = await fetch(originalsApi, options)
      const trendingData = await trendingResponse.json()
      const topRatedData = await topRatedResponse.json()
      const originalsData = await originalsResponse.json()
      if (trendingResponse.ok) {
        const updatedTrendingData = trendingData.results.map(movie => ({
          id: movie.id,
          backdropPath: movie.backdrop_path,
          overview: movie.overview,
          posterPath: movie.poster_path,
          title: movie.title,
        }))
        setTrendingMovies(updatedTrendingData)
      }
      if (topRatedResponse.ok) {
        const updatedTopRatedData = topRatedData.results.map(movie => ({
          id: movie.id,
          backdropPath: movie.backdrop_path,
          overview: movie.overview,
          posterPath: movie.poster_path,
          title: movie.title,
        }))
        setTopRatedMovies(updatedTopRatedData)
      }
      if (originalsResponse.ok) {
        const updatedOriginalsData = originalsData.results.map(movie => ({
          id: movie.id,
          backdropPath: movie.backdrop_path,
          overview: movie.overview,
          posterPath: movie.poster_path,
          title: movie.title,
        }))
        setOriginalsMovies(updatedOriginalsData)
      }
    }
    fetchData()
  }, [])
  console.log(topRatedMovies, originalsMovies)
  return (
    <div>
      <Header />
      <div className="home-bg-container">
        <div className="home-bg-image-container">
          <div className="bg-image-description-container">
            <h1 className="bg-image-heading">Super Man</h1>
            <p className="bg-image-description">
              Superman is a fictional superhero who first appeared in American
              comic books published by DC Comics.
            </p>
            <button type="button" className="bg-image-btn">
              Play
            </button>
          </div>
        </div>
        <div className="home-movies-container">
          <div className="movies-container">
            <h1 className="movies-heading">Trending Now</h1>
            <div className="react-slider-container">
              <ImageSlide movies={trendingMovies} />
            </div>
          </div>
          <div className="movies-container">
            <h1 className="movies-heading">Top Rated</h1>
            <div className="react-slider-container">
              <ImageSlide movies={topRatedMovies} />
            </div>
          </div>
          <div className="movies-container">
            <h1 className="movies-heading">Originals</h1>
            <div className="react-slider-container">
              <ImageSlide movies={originalsMovies} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Home
