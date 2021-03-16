import { forwardRef } from 'react';
import s from './Input.module.scss';

function Input(
  {
    label,
    name = label.toLowerCase(),
    value,
    onChange,
    autoComplete = 'on',
    type = 'text',
    ...props
  },
  ref,
) {
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
        ref={ref}
        {...props}
      />
      <label htmlFor={label} className={s.label}>
        {label}
      </label>
    </div>
  );
}

export default forwardRef(Input);
