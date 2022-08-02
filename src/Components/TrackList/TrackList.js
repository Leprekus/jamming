import React from "react";

export default class TrackList extends React.Component {
    render() {

        const list = this.props.list;
        let trackList;

        if(list instanceof Array){
            trackList = list.map((track) => {
                return (
                <li key={track.id}>
                    {`${track.name}, ${track.artist}, ${track.album}`}
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