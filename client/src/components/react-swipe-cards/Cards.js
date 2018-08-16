import React, { Component, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import Ionicon from 'react-ionicons';
import { DIRECTIONS } from './utils';

class SwipeCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      alertLeft: false,
      alertRight: false,
      containerSize: { x: 0, y: 0 },
    };
    this.removeCard = this.removeCard.bind(this);
    this.setSize = this.setSize.bind(this);
  }

  componentDidMount() {
    this.setSize();
    window.addEventListener('resize', this.setSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.setSize);
  }

  setSize() {
    const container = ReactDOM.findDOMNode(this);
    const containerSize = {
      x: container.offsetWidth,
      y: container.offsetHeight,
    };
    this.setState({ containerSize });
  }

  removeCard(side) {
    const { index } = this.state;
    const { children, onEnd } = this.props;
    setTimeout(() => this.setState({ [`alert${side}`]: false }), 300);
    if (children.length === (index + 1) && onEnd) onEnd();

    this.setState({
      index: index + 1,
      [`alert${side}`]: true,
    });
  }

  render() {
    const {
      index, containerSize, alertLeft, alertRight,
    } = this.state;
    const checkmark = `ios-checkmark-circle${alertRight ? '' : '-outline'}`;
    const circle = `ios-close-circle${alertLeft ? '' : '-outline'}`;
    const {
      children,
      className,
      headerImage,
      title,
    } = this.props;
    if (!containerSize.x || !containerSize.y) return <div className={className} />;

    const cards = children.reduce((memo, c, i) => {
      if (index > i) return memo;
      const props = {
        key: i,
        containerSize,
        index: children.length - index,
        ...DIRECTIONS.reduce((m, d) => ({ ...m, [`onOutScreen${d}`]: () => this.removeCard(d) }), {}),
        active: index === i,
      };
      return [cloneElement(c, props), ...memo];
    }, []);

    return (
      <div className={className}>
        <img src={headerImage} className="card-header" alt="" />
        <h4>
          {title}
        </h4>
        <div id="cards">
          {cards}
        </div>
        <div className="card-icons">
          <Ionicon icon={circle} fontSize="50px" color="red" />
          <Ionicon icon={checkmark} fontSize="50px" color="green" />
        </div>
      </div>
    );
  }
}

export default SwipeCards;
