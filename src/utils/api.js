import axios from 'axios';

const getToken = () => {
  return `Bearer ${localStorage.getItem('token')}`;
};

export const obtenerVehiculos = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/vehiculos/',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const crearVehiculo = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/vehiculos/',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const actualizarVehiculo = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarVehiculo = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

// CRUD PARA USUARIOS

export const obtenerUsuarios = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios',
    headers: {
      Authorization: getToken(),
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const obtenerDatosUsuario = async (successCallback, errorCallback) => {
  const options = {
    method: 'GET',
    url: 'http://localhost:5000/usuarios/self',
    headers: {
      Authorization: getToken(), 
    },
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const actualizarUsuario = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};

export const eliminarUser = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/usuarios/${id}/`,
    headers: { 'Content-Type': 'application/json',Authorization: getToken() },
  };
  await axios.request(options).then(successCallback).catch(errorCallback)
};

export const crearVenta = async (data, successCallback, errorCallback) => {
  const options = {
    method: 'POST',
    url: 'http://localhost:5000/ventas',
    headers: { 'Content-Type': 'application/json', Authorization: getToken() },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback);
};
export const actualizarVenta = async (id, data, successCallback, errorCallback) => {
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json' },
    data,
  };
  await axios.request(options).then(successCallback).catch(errorCallback)
};

export const eliminarVenta = async (id, successCallback, errorCallback) => {
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/ventas/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  await axios.request(options).then(successCallback).catch(errorCallback)
};