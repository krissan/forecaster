import React, { Fragment, useState } from 'react';
import { searchByCity } from '../../actions/search';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const SearchBar = ({searchByCity}) => {
    const [searchQuery, setSearchQuery] = useState('');

    const onChange = e => setSearchQuery(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        searchByCity(searchQuery);
    }

    return (
        <Fragment>
            <div className="row">
                <form onSubmit={e => handleSubmit(e)} className="search">
                    <h5>Search your city?</h5>
                    <input type="text" className="bar" value={searchQuery} onChange={e => onChange(e)}></input>
                    <button type="submit" className="btn">
                        <i className="material-icons">search</i>
                    </button>
                </form>
            </div>
        </Fragment>
    )
}

SearchBar.propTypes = {
    searchByCity: PropTypes.func.isRequired,
};

export default connect(null, {searchByCity})(SearchBar);