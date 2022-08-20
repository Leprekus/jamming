import React from "react";
import './SearchBar.css'
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
    }

    search(searchState) {
        return this.props.onSearch(searchState)

    }   

    handleTermChange(e) {
        const searchTerm = e.target.value
        return this.search(searchTerm)
    }

    render() {
        return(
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }
}