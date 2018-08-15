import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHiredActors } from '../actions';

import { SwipeCards, Card } from './react-swipe-cards';

class HiredActors extends Component {
  componentDidMount() {
    this.props.fetchHiredActors();
  }

  renderActors() {
    const { hiredActors } = this.props;
    return hiredActors.map((actor) => {
      return (
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
      );
    });
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

export default connect(mapStateToProps, { fetchHiredActors })(HiredActors);
