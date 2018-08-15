import React, { Component } from 'react';
import { translate3d } from './utils';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { initialPosition: { x: 0, y: 0 } };
    this.setInitialPosition = this.setInitialPosition.bind(this);
  }

  componentDidMount() {
    this.setInitialPosition();
    window.addEventListener('resize', this.setInitialPosition);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setInitialPosition);
  }

  setInitialPosition() {
    const card = this.node;
    const { containerSize } = this.props;
    const initialPosition = {
      x: Math.round((containerSize.x - card.offsetWidth) / 2),
      y: Math.round((containerSize.y - card.offsetHeight) / 2),
    }
    this.setState({ initialPosition });
  }

  render () {
    const { initialPosition: { x, y } } = this.state;
    const { className = 'inactive' } = this.props;
    var style = {
      ...translate3d(x, y),
      zIndex: this.props.index,
      ...this.props.style
    }

    return (
      <div style={style} className={`card ${className}`} ref={node => this.node = node}>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
