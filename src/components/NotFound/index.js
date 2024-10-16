import {withRouter} from 'react-router-dom'
import './index.css'

const NotFound = props => {
  const onClickedGoToHome = () => {
    const {history} = props
    history.push('/')
  }
  return (
    <div className="not-found-bg">
      <div className="not-found-description-container">
        <h1 className="not-found-heading">Lost Your Way?</h1>
        <p className="not-found-description">
          we are sorry the page you requested could not be found Please go back
          to the homepage.
        </p>
        <button
          type="button"
          className="go-to-home-btn"
          onClick={onClickedGoToHome}
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}
export default withRouter(NotFound)
