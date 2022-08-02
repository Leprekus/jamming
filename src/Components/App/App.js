import './App.css';
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const x = {id: 1, name:'Again', artist: 'Yui', album: 'Green Garden Pop'}
    const y = {id: 2, name:'Gurenge', artist: 'LiSa', album: 'Gurenge'}
    const z = {id: 3, name:'takt', artist: 'ryo', album: 'takt'}
    
    const tracksArray = [x, y, z]
    this.state = {searchResults: tracksArray,
                  playlistName: '[as]',
                  playlistTracks: tracksArray};
  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults results={this.state.searchResults}/>
          <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks}/>
        </div>
      </div>
    </div>
    )
  }
}

