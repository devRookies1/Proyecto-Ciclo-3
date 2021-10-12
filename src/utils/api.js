import axios from 'axios';
import { nanoid } from 'nanoid';

<<<<<<< HEAD
export const obtenerVehiculos = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vehiculos/' };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVehiculo = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/vehiculos/',
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const actualizarVehiculo = async (id, data, successCallback, errorCallback) => {
=======

export const obtenerVehiculos = async (successCallBack, errorCallBack) => {
  const options = { method: 'GET', url: 'http://localhost:5000/vehiculos/' };
  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack)
};

export const obtenerUsuarios = async (setUsuarios, setEjecutarConsulta = () => {}) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios/' };
  await axios
    .request(options)
    .then(function (response) {
      setUsuarios(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
  setEjecutarConsulta(false);
};

export const crearVehiculo = async(data,successCallBack, errorCallBack)=>{
  const options = { method: 'POST', 
  url: 'http://localhost:5000/vehiculos/',
  headers: { 'Content-Type': 'application/json'},
  data,};
  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack)
};



export const actualizarVehiculo = async ({id,data,successCallBack, errorCallBack}) => {
  //enviar la info al backend
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data
  };
  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack)
};


export const actualizarUsuario = async ({usuario, infoNuevoUsuario, setEdit, setEjecutarConsulta}) => {
  //enviar la info al backend
>>>>>>> 4d08b6cd59392ffacd4391687e4e7b30e9550aa8
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

<<<<<<< HEAD
export const eliminarVehiculo = async (id, successCallback, errorCallback) => {
=======
export const eliminarVehiculo = async ({id,successCallBack, errorCallBack}) => {
  
>>>>>>> 4d08b6cd59392ffacd4391687e4e7b30e9550aa8
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
<<<<<<< HEAD
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };
  await axios.request(options).then(successCallback).catch(errorCallback);
=======
  
  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack)
    
>>>>>>> 4d08b6cd59392ffacd4391687e4e7b30e9550aa8
};
export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
    const options = {
      method: 'PATCH',
      url: `http://localhost:5000/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json' },
      data,
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
  export const eliminarUsuario = async (id, successCallback, errorCallback) => {
    const options = {
      method: 'DELETE',
      url: `http://localhost:5000/usuarios/${id}/`,
      headers: { 'Content-Type': 'application/json' },
    };
    await axios.request(options).then(successCallback).catch(errorCallback);
  };
// CRUD DE VENTAS

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
    data,
=======
    data: { _id: usuario._id },
>>>>>>> 4d08b6cd59392ffacd4391687e4e7b30e9550aa8
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};