import s from './ButtonSubmit.module.scss';

export default function ButtonSubmit({ text, props }) {
  return (
    <button className={s.button} type="submit" {...props}>
      {text}
    </button>
  );
}
