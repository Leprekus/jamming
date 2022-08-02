import React from "react";
import Track from "../Track/Track";
import './TrackList.css'

export default class TrackList extends React.Component {
        renderTrackList() {
            const list = this.props.list;
            const trackList = list.map((track) => {
                return (
                <li key={track.id}>
                <Track trackData={track} addTrack={this.props.addTrack}/>
                </li>
                        )
            });
            return trackList

        }
    render() {
        const x = {id: 1, name:'Again', artist: 'Yui', album: 'Green Garden Pop'}
        const y = {id: 2, name:'Gurenge', artist: 'LiSa', album: 'Gurenge'}
        const z = {id: 3, name:'takt', artist: 'ryo', album: 'takt'}
        
        const tracksArray = [x, y, z]
        
    
        return(
            <div className="TrackList">
            {this.renderTrackList()}
            </div>
        )
    }
    componentDidMount() {
        this.renderTrackList()
    }
}