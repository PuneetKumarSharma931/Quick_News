import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import INDIA_FLAG from './INDIA_FLAG.png';
import US_FLAG from './US_FLAG.png';
import JAPAN_FLAG from './JAPAN_FLAG.png';

export class NavBar extends Component {

  static propTypes = {
    state: PropTypes.object,
    upDateState: PropTypes.func
  }

  handleIndiaNews = ()=>{

    this.props.upDateState('in', 'India');
  }

  handleUSNews = ()=>{

    this.props.upDateState('us', 'US');
  }

  handleJapanNews = ()=>{

    this.props.upDateState('jp', 'Japan');
  }

  render() {
    return (
      <div><nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Quick News</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link to={`/${this.props.state.countryName}/`}><img src={INDIA_FLAG} className="nav-link active" style={{height: "auto", width: "51px", cursor: "pointer", marginTop: '3px'}} aria-current="page" onClick={this.handleIndiaNews} alt="Indian Flag" /></Link>
                </li>
                <li className="nav-item mx-2">
                    <img src={US_FLAG} className="nav-link active" style={{height: "auto", width: "58px", cursor: "pointer", marginTop: '3px'}} aria-current="page" onClick={this.handleUSNews} alt="US Flag" />
                </li>
                <li className="nav-item mx-2">
                    <img src={JAPAN_FLAG} className="nav-link active" style={{height: "auto", width: "51px", cursor: "pointer", marginTop: '3px'}} aria-current="page" onClick={this.handleJapanNews} alt="Japan Flag" />
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/business`}>Business</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/entertainment`}>Entertainment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/health`}>Health</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/science`}>Science</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/sports`}>Sports</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={`/${this.props.state.countryName}/technology`}>Technology</Link>
                </li>
            </ul>
            </div>
        </div>
    </nav></div>
    )
  }
}

export default NavBar