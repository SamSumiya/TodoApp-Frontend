import React, { useState } from 'react';

const useCheckbox = (initialStatus = false) => {
  const [currentStatus, setCurrentStatus] = useState(initialStatus);

  const handleCurrentStatus = () => {
    setCurrentStatus(!currentStatus);
  };

  return { currentStatus, setCurrentStatus, handleCurrentStatus };
};

export default useCheckbox;
