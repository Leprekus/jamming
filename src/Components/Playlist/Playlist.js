import React from "react";
import TrackList from "../TrackList/TrackList";
import './Playlist.css'

export default class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this)
    }
    handleNameChange(e) {
        const fieldValue = e.target.defaultValue
        return this.props.onNameChange(fieldValue)
    }

    render() {
        let isRemoval = true;
        return(
            <div className="Playlist">
                <input defaultValue={this.props.playlistName} onChange={this.handleNameChange}/>
                <TrackList tracks={this.props.tracks} onRemove={this.props.onRemove} isRemoval={isRemoval}/>

                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}