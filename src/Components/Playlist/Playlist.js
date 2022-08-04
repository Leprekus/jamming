import React from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'

export default class Playlist extends React.Component {
    render() {
        const name = this.props.name ;
        const tracks = this.props.tracks;
        return(
            <div className="Playlist">
                <input value="New Playlist"/>
                <TrackList tracks={this.props.tracks} addTrack={this.props.addTrack}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}