import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API_KEY;
  
  constructor() {

    super();
    this.state = {
      country: 'in',
      countryName: 'india',
      progress: 0
    }
  }

  upDateProgress = (progress)=>{

    this.setState({progress: progress});
  }


  upDateState = (country, countryName)=>{
    this.setState({
      country: country,
      countryName: countryName
    });
  }

  render() {
    return (
      <Router>
        <LoadingBar
          color='#f11946'
          progress={this.state.progress}
          onLoaderFinished={() => this.upDateProgress(0)}
          height = {3}
        />
        <NavBar state={this.state} upDateState={this.upDateState} />
        <Routes>
          <Route exact path="/" element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}General`} pageSize={6} country={`${this.state.country}`} category='general'/>}/>
          <Route exact path={`/${this.state.countryName}/business`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Business`} pageSize={6} country={`${this.state.country}`} category='business'/>}/>
          <Route exact path={`/${this.state.countryName}/entertainment`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Entertainment`} pageSize={6} country={`${this.state.country}`} category='entertainment'/>}/>
          <Route exact path={`/${this.state.countryName}/health`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Health`} pageSize={6} country={`${this.state.country}`} category='health'/>}/>
          <Route exact path={`/${this.state.countryName}/science`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Science`} pageSize={6} country={`${this.state.country}`} category='science'/>}/>
          <Route exact path={`/${this.state.countryName}/sports`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Sports`} pageSize={6} country={`${this.state.country}`} category='sports'/>}/>
          <Route exact path={`/${this.state.countryName}/technology`} element={<News upDateProgress={this.upDateProgress} apiKey={this.apiKey} key={`${this.state.countryName}Technology`} pageSize={6} country={`${this.state.country}`} category='technology'/>}/>
        </Routes>
      </Router>
    )
  }
}

