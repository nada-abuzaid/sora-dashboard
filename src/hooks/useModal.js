import { useState } from 'react';

function useUpload({ setIsUpload }) {
  const [modalIsOpen, setIsOpen] = useState(true);
  const [isFile, setFile] = useState(null);

  const handleChange = (file) => {
    setFile(file);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsUpload(false);
  };
  return [modalIsOpen, isFile, handleChange, closeModal];
}

export default useUpload;
