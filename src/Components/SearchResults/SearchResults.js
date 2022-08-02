import React from "react";
import TrackList from "../TrackList/TrackList";

export default class SearchResults extends React.Component {
    render() {
        const results = this.props.results;
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList list={results}/>
            </div>
        )
    }
}