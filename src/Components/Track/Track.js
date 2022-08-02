import React from "react";

export default class Track extends React.Component {
    renderAction() {
        let isRemoval = true;
        return <button className="Track-action">{isRemoval ? '-' : '+'}</button>
    }

    render() {
        const name = this.props.trackData.name;
        const artist = this.props.trackData.artist;
        const album = this.props.trackData.album;
        return(
            <div className="Track">
                <div className="Track-information">
                        <h3>{name}</h3>
                        <p>{`${artist}, ${album}`}</p>
                </div>
                <button className="Track-action">{this.renderAction}</button>
            </div>
        )
    }
}

