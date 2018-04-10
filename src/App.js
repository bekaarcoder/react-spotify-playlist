import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: "40%", display: "inline-block"}}>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    let inputStyle = {
      width: "300px",
      height: "30px",
      outline: "none",
      border: "2px solid #555",
      borderRadius: "3px",
      fontSize: "14px",
      padding: "5px"
    };
    return (
      <div>
        <input type="text" style={inputStyle} placeholder="Apply Filter" />
      </div>
    )
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{width: "25%", display: "inline-block"}}>
        <h3>Playlist Name</h3>
        <ul>
          <li>Song Name</li>
          <li>Song Name</li>
          <li>Song Name</li>
        </ul>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Spotify Playlists</h1>
        <Aggregate></Aggregate>
        <Aggregate></Aggregate>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;
