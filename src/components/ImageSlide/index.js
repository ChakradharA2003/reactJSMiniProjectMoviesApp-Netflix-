import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const ImageSlide = props => {
  const {movies} = props
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <div className="image-slider-container">
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.id}>
            <img
              src={movie.posterPath}
              alt={movie.title}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
export default ImageSlide
