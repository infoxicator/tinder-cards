import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchHiredActors } from '../actions';

class HiredActors extends Component {
  componentDidMount() {
    this.props.fetchHiredActors();
  }

  renderActors() {
    const { hiredActors } = this.props;
    return hiredActors.map(actor => (
      <li className="collection-item avatar" key={actor.id}>
        <img src={actor.picture} alt="" className="circle" />
        <span className="title">
          {actor.name}
        </span>
        <p>
          Position:
          {actor.position}
        </p>
        <a target="_blank" rel="noopener noreferrer" href={actor.profileUrl} className="secondary-content">
          <i className="material-icons">
          View Profile
          </i>
        </a>
      </li>
    ));
  }

  render() {
    return (
      <ul className="collection">
        {this.renderActors()}
      </ul>
    );
  }
}

function mapStateToProps({ actors, hiredActors }) {
  return { actors, hiredActors };
}

HiredActors.propTypes = {
  hiredActors: PropTypes.object.isRequired,
  fetchHiredActors: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchHiredActors })(HiredActors);
