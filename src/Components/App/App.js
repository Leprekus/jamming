import React from 'react';
import './App.css';
import AlertBox from '../AlertBox/AlertBox'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const a = {id: 0, name:'someone', artist: 'is', album: 'Green'}
    const x = {id: 1, name:'Again', artist: 'Yui', album: 'Green Garden Pop'}
    const y = {id: 2, name:'Gurenge', artist: 'LiSa', album: 'Gurenge'}
    const z = {id: 3, name:'takt', artist: 'ryo', album: 'takt'}
    
    this.tracksArray = [x, y, z]
    this.state = {searchResults: [a,x,y,z],
                  playlistName: '[as]',
                  playlistTracks: this.tracksArray};
   
   //bound functions
   this.addTrack = this.addTrack.bind(this);

  }

  addTrack(newTrack) {
    //if true add track else leave as is
    const isTrack = this.tracksArray.every(track => track.id !== newTrack.id)
    if(isTrack){
      this.tracksArray.push(newTrack)
      return this.setState({playlistTracks: this.tracksArray})
    
    } else {
      //change alert for <AlertBox/>
      return alert('track already in playlist')
    }
  }

  removeTrack(delTrack) {
    //if false delete track 
    const isTrack = this.state.playlistTracks.every(track => track.id !== delTrack.id);

  }

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar/>
        <div className="App-playlist">
          <SearchResults results={this.state.searchResults} onAdd={this.addTrack}/>
          <Playlist playlistName={this.state.playlistName} tracks={this.state.playlistTracks} />
        </div>
      </div>
    </div>
    )
  }
}

