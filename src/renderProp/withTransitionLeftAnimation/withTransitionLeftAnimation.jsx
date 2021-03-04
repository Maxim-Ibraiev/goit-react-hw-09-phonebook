import { Children } from 'react';
import { CSSTransition } from 'react-transition-group';
import { TIMEOUT } from '../../const';
import fadeLeft from './withTransitionLeftAnimation.module.scss';
import fadeRight from './withTransitionRightAnimation.module.scss';

const withTransitionLeftAnimation = WrappedComponent => props => {
  return (
    <CSSTransition
      in={true}
      appear={!!props.appear}
      timeout={props.timeout || TIMEOUT}
      classNames={props.rightTransition ? fadeRight : fadeLeft}
      unmountOnExit
      {...props}
    >
      <WrappedComponent {...props}>{Children}</WrappedComponent>
    </CSSTransition>
  );
};

export default withTransitionLeftAnimation;
