import React from 'react';
import './App.css';
import AlertBox from '../AlertBox/AlertBox'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

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
   
   //bound functions
   this.addTrack = this.addTrack.bind(this);

  }

  addTrack(newTrack) {
    const currentTracks = this.state.playlistTracks;
    currentTracks.forEach(track => {
      track.id === newTrack.id ? <AlertBox/> : currentTracks.push(newTrack)
    })
    this.setState({playlistTracks: currentTracks})

  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults results={this.state.searchResults}/>
          <Playlist name={this.state.playlistName} tracks={this.state.playlistTracks} addTrack={this.addTrack}/>
        </div>
      </div>
    </div>
    )
  }
}

