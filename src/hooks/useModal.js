import { useState } from 'react';

function useModal() {
  const [isDelete, setIsDelete] = useState(false);

  const closeModal = () => {
    setIsDelete(!isDelete);
  };

  return [closeModal, setIsDelete, isDelete];
}

export default useModal;
