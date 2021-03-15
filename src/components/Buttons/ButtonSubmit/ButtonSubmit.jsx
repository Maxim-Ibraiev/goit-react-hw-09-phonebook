import s from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ children, props }) {
  return (
    <button className={s.button} type="submit" {...props}>
      {children}
    </button>
  );
}
