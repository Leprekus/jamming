import React from "react";
import Track from "../Track/Track";
import './TrackList.css'

export default class TrackList extends React.Component {
       
    render() {
        let isRemoval = this.props.isRemoval;
        let trackList = this.props.tracks && this.props.tracks.length ?
        (this.props.tracks.map((track) => {
            return (
            <li key={track.id}>
            <Track 
            trackData={track} 
            onAdd={this.props.onAdd}
            onRemove={this.props.onRemove}
            isRemoval={this.props.isRemoval}
            />
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