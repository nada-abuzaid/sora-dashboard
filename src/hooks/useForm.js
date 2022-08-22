import { useEffect, useState } from 'react';

function useForm({ name, errors }) {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (errors[name]) {
      setError(true);
    }
  }, [errors, name]);

  return error;
}

export default useForm;
