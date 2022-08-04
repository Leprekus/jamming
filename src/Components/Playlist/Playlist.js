import React from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'

export default class Playlist extends React.Component {
    render() {
        let isRemoval = true;
        return(
            <div className="Playlist">
                <input defaultValue={this.props.playlistName}/>
                <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={isRemoval}/>

                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}