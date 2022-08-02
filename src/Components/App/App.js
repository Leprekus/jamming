import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const x = {id: 1, name:'name', artist: 'artist', album: 'album'}
    const y = {id: 2, name:'name', artist: 'artist', album: 'album'}
    const z = {id: 3, name:'name', artist: 'artist', album: 'album'}
    
    const tracksArray = [x, y, z]
    this.state = {searchResults: tracksArray};
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults results={this.state.searchResults}/>
          <Playlist/>
        </div>
      </div>
    </div>
    )
  }
}

