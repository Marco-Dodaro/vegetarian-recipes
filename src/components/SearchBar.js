import React, { Component } from 'react'
import {FaSearch} from 'react-icons/fa';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      <div className="searchBarBcg displayFlex">
        <form className="displayFlex flexColumn">
          <div className="searchBar">
            <input type="text" id="searchQueryInput" className="searchBar" placeholder="Type an ingredient..."/>
            <button type="submit" id="searchQuerySubmit" className="searchIcon"><FaSearch/></button>
          </div>
        </form>
      </div>
    )
  }
}
