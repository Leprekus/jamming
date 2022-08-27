import React from "react";
import './SearchBar.css'
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        //state
        this.state = {
            displaySearchSongInput: 'block',
            displayFindPlaylistInput: 'none'
        }

        //bound functions
        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.searchPlaylist = this.searchPlaylist.bind(this)
    }

    search(searchState) {
        return this.props.onSearch(searchState)

    }   

    handleTermChange(e) {
        const searchTerm = e.target.value
        return this.search(searchTerm)
    }

    toggleVisibility () {
        return (
        this.state.displaySearchSongInput === 'block' ?

        (this.setState({displaySearchSongInput: 'none'}),
        this.setState({displayFindPlaylistInput: 'block'})):

        (this.setState({displaySearchSongInput: 'block'}),
        this.setState({displayFindPlaylistInput: 'none'}))

    ) 
}
    

    searchPlaylist(e) {
        const searchTerm = e.target.value
        const searchPlaylist = this.props.onSearchPlaylist
        return searchPlaylist(searchTerm)
    }

    render() {
        return(
            <div className="SearchBar">
                <input style={{display: this.state.displaySearchSongInput}} placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange}/>
                <input style={{display: this.state.displayFindPlaylistInput}} placeholder="Search By Song" onChange={this.searchPlaylist}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
                <button className="secondary-button" onClick={this.toggleVisibility}>Find Playlist By Song</button>
            </div>
        )
    }
}