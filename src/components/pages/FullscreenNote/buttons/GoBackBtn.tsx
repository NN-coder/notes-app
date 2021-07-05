import React from 'react';
import { useHistory } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';

export const GoBackBtn: React.FC = () => {
  const { goBack } = useHistory();

  return (
    <button type="button" onClick={goBack} title="Go back" style={{ marginRight: 'auto' }}>
      <MdArrowBack size="100%" />
    </button>
  );
};
