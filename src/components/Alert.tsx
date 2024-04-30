// Alert.js

import React from 'react';
import { useAlert } from '../app/context/AlertContext';

const Alert = () => {
  const { alertProps, hideAlert } = useAlert();

  if (!alertProps) {
    return null;
  }

  const { type, titulo, mensagem } = alertProps;

  return (
    <div className={`alert alert-${type}`}>
      <strong>{titulo}</strong>: {mensagem}
      <button onClick={hideAlert}>Fechar</button>
    </div>
  );
};

export default Alert;
