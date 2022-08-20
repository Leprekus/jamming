import React from "react";
import Track from "../Track/Track";
import './TrackList.css'

export default class TrackList extends React.Component {
       
    render() {
        let isRemoval = this.props.isRemoval;
        let trackList = (this.props.tracks.length ?
        this.props.tracks.map((track) => {
            const parsedTrack = {
                id: track.id,
                track: track
            }
            return (
            <li key={parsedTrack.id}>
            <Track 
            trackData={parsedTrack.track} 
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
            />
            </li>
                    )
        }): [])  
    
        return(
            <div className="TrackList">
            {trackList}
            </div>
        )
    }
}