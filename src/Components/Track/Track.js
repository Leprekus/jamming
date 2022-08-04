import React from "react";
import './Track.css'

export default class Track extends React.Component {   
    constructor(props){
        super(props);
        this.addTrack = this.addTrack.bind(this)
        this.removeTrack = this.removeTrack.bind(this)
       
    } 
    renderAction() {
        let isRemoval = this.props.isRemoval;
        return isRemoval ? '-' : '+'
    }

    addTrack(track) {
        return this.props.onAdd(track)
    }

    removeTrack(track) {
        return this.props.onRemove(track)
    }

    render() {
        const trackData = this.props.trackData;
        const name = trackData.name;
        const artist = trackData.artist;
        const album = trackData.album;
    
        return(
            <div className="Track">
                <div className="Track-information">
                        <h3>{name}</h3>
                        <p>{`${artist}, ${album}`}</p>
                </div>
                <button className="Track-action" onClick={() => this.props.isRemoval ? this.removeTrack(trackData) : this.addTrack(trackData)}>{this.renderAction()}</button>
            </div>
        )
    }
}

