import React from "react";
import './Track.css'

export default class Track extends React.Component {
    
    renderAction() {
        let isRemoval = true;
        return isRemoval ? '-' : '+'
    }
    trackHandle() {
        const addTrack = this.props.addTrack;
        const id = this.props.trackData.id
        return addTrack(id)
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
                <button className="Track-action" onClick={this.trackHandle}>{this.renderAction()}</button>
            </div>
        )
    }
}

