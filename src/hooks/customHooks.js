import { useState } from 'react';

export const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const handleChange = e => (e.target ? setValue(e.target.value) : setValue(e));

  return { value, onChange: handleChange };
};
