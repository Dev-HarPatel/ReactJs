import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">Link</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown
            </Link>
            <ul className="dropdown-menu">
              <li><Link className="dropdown-item" to="/">Action</Link></li>
              <li><Link className="dropdown-item" to="/">Another action</Link></li>
              <li><hr className="dropdown-divider"/></li>
              <li><Link className="dropdown-item" to="/">Something else here</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/">Disabled</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-primary" type="submit">Search</button>
        </form> */}

      <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark':'light'}`}>
        <input className="form-check-input inputDark" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label lableDark" htmlFor="flexSwitchCheckDefault">
          <i className="fas fa-moon"></i>
          <i className='fas fa-sun'></i>
          <div className='ball'></div>
        </label>
      </div>

      {/* <select class="form-select w-25 mx-3" aria-label="Default select example">
        <option selected>Light</option>
        <option value="1">dark</option>
        <option value="2">gray</option>
        <option value="3">light dark</option>
      </select> */}
      </div>
    </div>
    </nav>
    </>
  )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}
Navbar.defaultProps = {title: 'Set Title Hear'}