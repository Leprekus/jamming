import React from "react";
import Track from "../Track/Track";

export default class TrackList extends React.Component {
    render() {

        const list = this.props.list;
        let trackList;

        if(list instanceof Array){
            trackList = list.map((track) => {
                return (
                <li key={track.id}>
                <Track trackData={track}/>
                </li>
                       )
            });
        }
    
        return(
            <div className="TrackList">
            {trackList}
            </div>
        )
    }
}