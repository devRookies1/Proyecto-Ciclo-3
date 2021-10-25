import { useUser } from 'context/userContext';
import React from 'react';
import {toast, ToastContainer } from 'react-toastify'

const PrivateRoute = ({ roleList,estadoList, children }) => {

  const { userData } = useUser();

  if (roleList.includes(userData.rol) && estadoList.includes(userData.estado) ) {
    return children;
  }
  return <div><span>Estas Pendiente</span></div>

};


export default PrivateRoute;