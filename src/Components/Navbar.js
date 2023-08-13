import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom';
export default function Navbar(props) {
  return (
 
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    {/*<Link className="navbar-brand" to="/">{props.title}</Link>*/}
    <a className="navbar-brand" href="#">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/*<Link className="nav-link active" aria-current="page" to="/">Home</Link>*/}
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        
        {/*<li className="nav-item">
          <Link className="nav-link" to="/aboutttt">{props.about}</Link>
  </li>*/}
      </ul>
      {/* color canger  circle */}
      <div className="mycss" >
          <div className='blue'  onClick={props.makefun1}></div>
          <div className='green' onClick={props.makefun2}></div>
          <div className='brown' onClick={props.makefun3}></div>
      </div>
         {/*switch */}
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'} mx-5`}>
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"onClick={() =>{ props.togglefun(props.togglefun); props.textfun(props.textt); }}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.textt}</label>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav> 
  )
}

Navbar.propTypes= {title: PropTypes.string,
                   about: PropTypes.string }
// Specifies the default values for props: jb values dusri file me pass na kre tw ye metod use kre
Navbar.defaultProps = {
  title: 'Stranger'
};