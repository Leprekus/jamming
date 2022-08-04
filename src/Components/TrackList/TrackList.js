import React from "react";
import Track from "../Track/Track";
import './TrackList.css'

export default class TrackList extends React.Component {
       
    render() {
        const tracks = this.props.tracks;
        let trackList = tracks && tracks.length ?
        (tracks.map((track) => {
            return (
            <li key={track.id}>
            <Track trackData={track} addTrack={this.props.addTrack}/>
            </li>
                    )
        })) : null
       
        
    
        return(
            <div className="TrackList">
            {trackList}
            </div>
        )
    }
}