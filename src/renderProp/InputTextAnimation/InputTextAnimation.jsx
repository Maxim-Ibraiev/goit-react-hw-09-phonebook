import { CSSTransition } from 'react-transition-group';
import { TIMEOUT } from '../../const';
import fade from './InputTextAnimation.module.scss';

const InputTextAnimation = WrappedComponent => props => {
  return (
    <CSSTransition in={true} classNames={fade} timeout={TIMEOUT}>
      <WrappedComponent {...props} />
    </CSSTransition>
  );
};

export default InputTextAnimation;
