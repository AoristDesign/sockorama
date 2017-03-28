import React, { Component } from 'react';


class Search extends Component {
  render() {
    return ( <div>
        <div className="row">
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search for..."/>
                        <span className="input-group-btn">
                        <button className="btn btn-default" type="button">SEARCH</button>
                        <button className="btn btn-default" type="button" onClick={() => window.$('#advancedSearchModal').modal('toggle')}>ADVANCED SEARCH</button>
                        </span>
                    </div>
                </div>
            </div>
            <br/><br/>
            </div>
    )
  }
}

export default Search