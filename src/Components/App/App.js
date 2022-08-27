import React from 'react';
//import './App.css';
import AlertBox from '../AlertBox/AlertBox'
import SearchBar from '../SearchBar/SearchBar'
import SearchResults from '../SearchResults/SearchResults'
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.tracksArray = []
    this.state = {searchResults: [],
                  playlistName: 'New Playlist',
                  playlistTracks: this.tracksArray,
                };
   
   //bound functions
   this.addTrack = this.addTrack.bind(this);
   this.removeTrack = this.removeTrack.bind(this);
   this.updatePlaylistName = this.updatePlaylistName.bind(this);
   this.savePlaylist = this.savePlaylist.bind(this);
   this.resetPlaylist = this.resetPlaylist.bind(this)
   this.search = this.search.bind(this);


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
    //check if track if in playlilst
    //if track in playlist find index
    //slice[index]
    const index = this.tracksArray.forEach((track, index) => {
      if(track.id === delTrack.id) {
        return index
      }
    });
    this.tracksArray.splice(index, 1)
    this.setState({playlistTracks : this.tracksArray})


  }
//isremoval is passed from search results to tracklist
//isremoval is passed from playlist to tracklist

updatePlaylistName(name) {
  return this.setState({playlistName: name})
}

resetPlaylist() {
  return (
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks:[]
    })
  )
}

savePlaylist() {
  const name = this.state.playlistName
  const trackUris = this.state.playlistTracks.map(track => track.uri)
  Spotify.savePlaylist(name, trackUris)
  return this.resetPlaylist()
}

async search(searchTerm) {
  const results = await Spotify.search(searchTerm)
  return (results.length && results instanceof Array ?
          this.setState({searchResults: results})
          : [])
 
}

async searchPlaylist (searchTerm) {
  const results = await Spotify.search(searchTerm)
  return (results.length && results instanceof Array ?
          this.setState({searchResults: results})
          : [])
}

  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar 
        onSearch={this.search}
        onSearchPlaylist={this.searchPlaylist}
        />
        <div className="App-playlist">
          <SearchResults 
          results={this.state.searchResults}
          onAdd={this.addTrack}
          />
          <Playlist 
          playlistName={this.state.playlistName} 
          tracks={this.state.playlistTracks} 
          onRemove={this.removeTrack}
          onNameChange={this.updatePlaylistName}
          onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
    )
  }
}

