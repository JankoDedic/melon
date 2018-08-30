import React from 'react';
import { connect } from 'react-redux';

import { setTextFilter } from '../actions/filters';
import SongList from './SongList';

class SongDashboardPage extends React.Component {
  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  render() {
    return (
      <div className="song-dashboard">
        <div className="song-dashboard__nav">
          <div className="song-dashboard__nav__search">
            <input
              type="text"
              spellcheck="false"
              placeholder="Search for songs and artists"
              onChange={this.onTextChange}
              value={this.props.text}
            />
          </div>
          <div className="song-dashboard__nav__button">
            <button onClick={() => this.props.history.push('/add')}>Add Song</button>
          </div>
        </div>
        <SongList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.filters.text,
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongDashboardPage);
