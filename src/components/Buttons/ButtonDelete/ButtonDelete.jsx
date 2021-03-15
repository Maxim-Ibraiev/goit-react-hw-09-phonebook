import s from './ButtonDelete.module.scss';
import PropTypes from 'prop-types';

export default function ButtonDelete({ onClick, children }) {
  return (
    <button className={s.button} onClick={onClick}>
      {children}
    </button>
  );
}

ButtonDelete.propTypes = {
  onClick: PropTypes.func,
};
