import React from 'react';
// import { Link } from 'react-router-dom';

export default function Navbar(prop) {
  return (
    <div>
      <>
      <nav className={`navbar navbar-expand-lg bg-${prop.mode} navbar-${prop.mode}`}>
  <div className="container-fluid">
 {/* <Link className="navbar-brand" to="/">{prop.title}</Link>*/}
  <a className="navbar-brand" href="/">{prop.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
          {/* <Link className="nav-link active" aria-current="page" to="/home">Home</Link>*/}
        </li>
     
        <li className="nav-item">
        {/*<Link className="nav-link" to="/about">About</Link>*/}
      </li>
       
      </ul>
 
<div className='container me-2'>  <form className="d-flex" role="search">
<input className="form-control me-1" type="search" placeholder="Search Something.." aria-label="Search"/>
<button className={`btn btn-outline-${prop.mode=== 'light'?'dark':'light'}`} type="submit">Search</button>
</form></div>
  <div className={`form-check form-switch text-${prop.mode=== 'light'?'dark':'light'}`}>
  <input className="form-check-input" type="checkbox" onClick={prop.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Mode</label>
</div>

    </div>
  </div>
</nav></>
    </div>
  );
}
