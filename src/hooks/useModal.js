import { useState } from 'react';

function useModal(setIsDelete) {
  const [modalIsOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    setIsOpen(false);
    setIsDelete(false);
  };

  return [modalIsOpen, setIsOpen, closeModal];
}

export default useModal;
