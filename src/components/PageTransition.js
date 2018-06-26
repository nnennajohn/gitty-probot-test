// @flow
import React from 'react';
import { Transition as ReactTransition } from 'react-transition-group';
import { historyExitingEventType, timeout } from '../../gatsby-browser';

const getTransitionStyles = (timeout) => {
  return {
    entering: {
      opacity: 0,
    },
    entered: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 1,
    },
    exiting: {
      transition: `opacity ${timeout}ms ease-in-out`,
      opacity: 0,
    },
  };
};

const getTransitionStyle = ({ timeout, status }) =>
  getTransitionStyles(timeout)[status];

type Props = {
  children: any,
};

type State = {
  exiting: boolean,
};

class Transition extends React.Component<Props, State> {
  // listenerHandler: () => any;

  constructor(props: any) {
    super(props);
    this.state = { exiting: false };
    (this: any).listenerHandler = this.listenerHandler.bind(this);
  }

  listenerHandler(event: any) {
    this.setState({ exiting: true });
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  static getDerivedStateFromProps({ exiting }: State) {
    if (exiting) {
      return { exiting: false };
    }
    return null;
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout,
      },
      appear: true,
      in: !this.state.exiting,
    };

    return (
      <ReactTransition {...transitionProps}>
        {(status) => (
          <div
            style={{
              ...getTransitionStyle({ status, timeout }),
            }}
          >
            {this.props.children}
          </div>
        )}
      </ReactTransition>
    );
  }
}

export default Transition;
