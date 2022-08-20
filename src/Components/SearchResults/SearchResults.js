import React from "react";
import TrackList from "../TrackList/TrackList";
import './SearchResults.css'
export default class SearchResults extends React.Component {
    render() {
        let isRemoval = false;

        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={this.props.results} onAdd={this.props.onAdd} isRemoval={isRemoval}/>
            </div>
        )
    }
}