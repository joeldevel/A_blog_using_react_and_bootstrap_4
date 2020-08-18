import React from 'react';

function NavBar() {
  return (
    <div className="">
    <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
    <a className="navbar-brand" href="index.html">
      <img src="images/sandiego-logo.png"/>
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">about</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">blog</a>
        </li>
     </ul>

    </div>
  </nav>
  </div>
  )
}

export default NavBar
