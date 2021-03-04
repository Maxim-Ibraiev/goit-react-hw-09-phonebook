import s from './Logo.module.scss';
import withTransitionLeftAnimation from '../../renderProp/withTransitionLeftAnimation';

function Logo() {
  return <h1 className={s.color}>{'Phonebook'}</h1>;
}

export default withTransitionLeftAnimation(Logo);
