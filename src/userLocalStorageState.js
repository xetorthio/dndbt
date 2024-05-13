import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultValue) {
  // Obtener el valor inicial del localStorage
  const [state, setState] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
  });

  // Actualizar el localStorage cuando el estado cambie
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}

export default useLocalStorageState;