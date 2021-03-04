import s from './Notification.module.scss';
import withTransitionLeftAnimation from '../../renderProp/withTransitionLeftAnimation';

function Notification({ text = 'Something gone wrong' }) {
  return (
    <div className={s.container}>
      <p>{text}</p>
    </div>
  );
}

export default withTransitionLeftAnimation(Notification);
