import s from './Input.module.scss';

function Input({
  label,
  name = label.toLowerCase(),
  value,
  onChange,
  autoComplete = 'on',
  type = 'text',
  ...props
}) {
  return (
    <div className={s.container}>
      <input
        id={label}
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        placeholder=" "
        {...props}
      />
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
    </div>
  );
}

export default Input;
