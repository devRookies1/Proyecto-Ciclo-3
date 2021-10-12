import axios from 'axios';
import { toast } from 'react-toastify';


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
  const options = {
    method: 'PATCH',
    url: `http://localhost:5000/usuario/${usuario._id}/`,
    headers: { 'Content-Type': 'application/json' },
    data: { ...infoNuevoUsuario },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Usuario modificado con éxito');
      setEdit(false);
      setEjecutarConsulta(true);
    })
    .catch(function (error) {
      toast.error('Error modificando el usuario');
      console.error(error);
    });
};

export const eliminarVehiculo = async ({id,successCallBack, errorCallBack}) => {
  
  const options = {
    method: 'DELETE',
    url: `http://localhost:5000/vehiculos/${id}/`,
    headers: { 'Content-Type': 'application/json' },
  };
  
  await axios
    .request(options)
    .then(successCallBack)
    .catch(errorCallBack)
    
};

export const eliminarUsuario = async ({usuario,setEjecutarConsulta} ) => {
  const options = {
    method: 'DELETE',
    url: 'http://localhost:5000/usuarios/eliminar/',
    headers: { 'Content-Type': 'application/json' },
    data: { _id: usuario._id },
  };

  await axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      toast.success('Usuario eliminado con éxito');
      setEjecutarConsulta(true);
    })
    .catch(function (error) {
      console.error(error);
      toast.error('Error eliminando el usuario');
    });
};