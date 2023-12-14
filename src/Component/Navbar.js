import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export class Navbar extends Component {

  render() {
    const { mode, togglemode } = this.props;
    return (
        <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} pt-2 pb-3`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">News App</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                <Link className="nav-link active " to="/business">Business</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/general">General</Link>
                </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/health">Health</Link>
                </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/Science">Science</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/Sport">Sport</Link>
                </li>
               <li className="nav-item">
                <Link className="nav-link active" to="/technology">Technology</Link>
                </li>  
              
            </ul>
          
          </div>
        </div>



        <div className={`d-flex form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`}>
          <input
            className="form-check-input"
            type="checkbox" style={{ width: "40px" }}
            onClick={togglemode}
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" style={{ width: "140px" }} htmlFor="flexSwitchCheckDefault">
            Enable DarkMode
          </label>
        </div>
        </nav>
    );
  }
}
Navbar.propTypes = {
  mode: PropTypes.string.isRequired,
  togglemode: PropTypes.func.isRequired,
};
export default Navbar;
