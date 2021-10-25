import { useUser } from 'context/userContext';
import React from 'react';

const PrivateComponent = ({ roleList, estadoList, children }) => {
  const { userData } = useUser();

  if (roleList.includes(userData.rol) && estadoList.includes(userData.estado)) {
    return children;
  }

  return <></>;
};

export default PrivateComponent;