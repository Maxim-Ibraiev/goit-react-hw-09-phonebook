import s from './ButtonDelete.module.scss';

export default function ButtonDelete({ onClick }) {
  return <button className={s.button} onClick={onClick}></button>;
}
