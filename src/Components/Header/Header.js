import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <>
<header>
  <nav className="navbar navbar-expand-lg navbar-dark bg-color">
    <div className="container">
      <Link className="navbar-brand" to="/">APID</Link>
      <button className="navbar-toggler" aria-label="Toggle navigation" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="offcanvas offcanvas-start" id="offcanvasWithBothOptions">
        <div className="offcanvas-header">
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
        </div>
        <div className="offcanvas-body">
          <ul className="nav col-12 col-lg-auto my-2 my-md-0">
            <li>
              <Link to="/" className="nav-link">
                <i className="fa-solid fa-house" />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link ">
                About
              </Link>
            </li>
            <li>
              <Link to="#" className="nav-link">
                Services
              </Link>
            </li>
          </ul>
          <div className="account-button">
            <button type="button" className="btn btn-light me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>

        </>
    )
}

export default Header
