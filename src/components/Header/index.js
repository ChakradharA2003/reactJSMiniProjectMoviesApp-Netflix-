import {useState, useRef} from 'react'
import {Link, useLocation} from 'react-router-dom'
import {HiOutlineSearch} from 'react-icons/hi'
import {MdMenuOpen} from 'react-icons/md'
import {ImCross} from 'react-icons/im'
import './index.css'

const Header = () => {
  const location = useLocation()
  const [showHamburgerMenu, setHamburgerMenu] = useState(false)
  const onClickHamburger = () => setHamburgerMenu(prev => !prev)
  const onClickCloseHamburger = () => setHamburgerMenu(prev => !prev)

  const searchBoxDisplay = useRef(false)
  const searchDisplay = searchBoxDisplay.current ? (
    <div className="search-container">
      <input
        type="search"
        className="search-input-field"
        placeholder="Search"
      />
      <button data-testid="searchButton" type="button" className="search-btn">
        <HiOutlineSearch color="#ffffff" />
      </button>
    </div>
  ) : (
    <button
      type="button"
      className="search-only-btn"
      onClick={() => {
        searchBoxDisplay.current = false
      }}
    >
      <HiOutlineSearch color="#ffffff" size={25} />
    </button>
  )
  return (
    <nav className="header-bg-container">
      <div className="header-links-container">
        <Link to="/" className="link-element">
          <img
            alt="website logo"
            src="https://res.cloudinary.com/kanya-raashi/image/upload/v1729068838/websitelogo_nkh3fl.png"
            className="header-website-logo"
          />
        </Link>
        <Link to="/" className="link-element">
          <p
            style={{fontWeight: location.pathname === '/' ? 'bold' : 'normal'}}
            className="link"
          >
            Home
          </p>
        </Link>
        <Link to="/popular" className="link-element">
          <p
            style={{
              fontWeight: location.pathname === '/popular' ? 'bold' : 'normal',
            }}
            className="link"
          >
            Popular
          </p>
        </Link>
      </div>
      <div className="search-account-links-container">
        <Link to="/search" className="link-element">
          {searchDisplay}
        </Link>
        <Link to="/account" className="link-element">
          <img
            src="https://res.cloudinary.com/kanya-raashi/image/upload/v1729067652/AvatarDefault_j7illu.png"
            alt="profile"
            className="profile-image"
          />
        </Link>
        <div className="hamburger-menu">
          <button
            type="button"
            className="hamburger-menu-btn"
            onClick={onClickHamburger}
          >
            <MdMenuOpen color="#ffffff" size={25} />
          </button>
        </div>
      </div>
      {showHamburgerMenu && (
        <div className="mobile-nav-options-container">
          <ul className="mobile-nav-links">
            <Link to="/" className="link-element">
              <li
                className="mobile-link"
                style={{
                  fontWeight: location.pathname === '/' ? 'bold' : 'normal',
                }}
              >
                Home
              </li>
            </Link>
            <Link to="/" className="link-element">
              <li
                className="mobile-link"
                style={{
                  fontWeight:
                    location.pathname === '/popular' ? 'bold' : 'normal',
                }}
              >
                Popular
              </li>
            </Link>
            <Link to="/" className="link-element">
              <li
                className="mobile-link"
                style={{
                  fontWeight:
                    location.pathname === '/account' ? 'bold' : 'normal',
                }}
              >
                Account
              </li>
            </Link>
          </ul>
          <button
            type="button"
            className="mobile-navs-close-btn"
            onClick={onClickCloseHamburger}
          >
            <ImCross />
          </button>
        </div>
      )}
    </nav>
  )
}
export default Header
