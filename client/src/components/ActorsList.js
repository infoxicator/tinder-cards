import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchActors, hireActor, fetchHiredActors } from '../actions';

import { SwipeCards, Card } from './react-swipe-cards';

class ActorsList extends Component {
  constructor(props) {
    super(props);
    this.state = { position: 'Stunt Double' };
  }

  componentDidMount() {
    this.props.fetchActors();
  }

  renderActors() {
    const { actors } = this.props;
    return actors.map((actor) => {
      return (
        <Card
          key={actor.id}
          onSwipeLeft={() => {
            // console.log('rejected :\'(');
          }}
          onSwipeRight={() => {
            const { position } = this.state;
            this.props.hireActor(actor, position);
          }}
        >
          <img src={actor.picture} alt="" />
          <h6>
            {actor.name}
          </h6>
        </Card>
      );
    });
  }

  render() {
    return (
      <SwipeCards
        className="master-root"
        headerImage="https://vignette.wikia.nocookie.net/missionimpossible/images/0/04/Mission_Impossible_III_logo.png/revision/latest?cb=20150724010920"
        title={`Position: ${this.state.position}`}
      >
        {this.renderActors()}
      </SwipeCards>
    );
  }
}

function mapStateToProps({ actors, hiredActors }) {
  return { actors, hiredActors };
}

export default connect(mapStateToProps, { fetchActors, hireActor, fetchHiredActors })(ActorsList);
