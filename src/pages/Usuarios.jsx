
import SectionMain from 'components/SectionMain';
//import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';
import { actualizarUsuario, obtenerUsuarios } from 'utils/api';
import usuarios1 from 'media/usuarios1.png'
import { toast , ToastContainer } from 'react-toastify';

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true)

  useEffect(() => {
    if(ejecutarConsulta){

      const fetchUsuarios = async () => {

      await obtenerUsuarios(
        (respuesta) => {
          console.log('usuarios', respuesta.data);
          setUsuarios(respuesta.data);
        },
        (err) => {
          console.log(err);
        }
      );
      setEjecutarConsulta(false)
    };
    fetchUsuarios();}
  }, [ejecutarConsulta]);

  return (
    <SectionMain nombre='usuarios' logo={usuarios1} >
    <div className="flex flex-col  items-center justify-start">
    <table  className=" tabla border-separate bg-gray-400 w-3/4">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
      </thead> 
      <tbody>
        {usuarios.map((user)=>{
          return(
         <FilaUsuarios key={user._id} user={user} setEjecutarConsulta={setEjecutarConsulta}/>               
          )
        }

        )}
    
      </tbody>
      </table>         
    </div>
    <ToastContainer position="bottom-center" autoClose={5000}/>    
    </SectionMain>

  );
};

const FilaUsuarios = ({ user , setEjecutarConsulta}) => {

  const [edit, setEdit] = useState(false)
  const [rol, setRol] = useState(user.rol);
  const [estado, setEstado] = useState(user.estado ?? '');

    const editUsuario = async () => {
      await actualizarUsuario(
        user._id,
        { estado, rol },
        (res) => {
          console.log(res);
          toast.success('Usuario modificado con éxito');
          setEdit(false);
          setEjecutarConsulta(true);          
        },
        (err) => {
          console.error(err);
        }
      );
    };
    if (user.estado !== estado) {
      editUsuario();
    }


  return(
    <>

          {edit?(
            <>
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <EstadoUsuario user={user} estado={estado} setEstado={setEstado} />
                </td>
                <td>
                  <RolesUsuario user={user} rol={rol} setRol={setRol} />
                </td>
                <td>
                  {edit? (
                 
                 <i onClick={()=> editUsuario()}
                     className='fas fa-check text-green-500'/>
                  
              ):(
                 <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
              )
 
              }
                  </td>
              </tr>

            </>

          ):(
            <>
                <tr >
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.estado}
                  </td>
                  <td>
                    {user.rol}
                  </td>
                  <td>
                  {edit? (
                 
                 <i onClick={()=> editUsuario()}
                     className='fas fa-check text-green-500'/>
                  
              ):(
                 <i onClick={()=>setEdit(!edit)} className='fas fa-edit text-yellow-500'/>
              )
 
              }
                  </td>
                </tr>            </>

          )}  
        </>  
  )
}
 
const RolesUsuario = ({ rol, setRol }) => {


  return (
    <select value={rol} onChange={(e) => setRol(e.target.value)}>
      <option value='' disabled>
        Seleccione un rol
      </option>
      <option value='admin'>Admin</option>
      <option value='vendedor'>Vendedor</option>
      <option value='sin rol'>Sin rol</option>
    </select>
  );
};

const EstadoUsuario = ({ estado, setEstado }) => {

  return (
    <select value={estado} onChange={(e) => setEstado(e.target.value)}>
      <option value='' disabled>
        Seleccione un estado
      </option>
      <option value='autorizado' className='text-green-500'>
        Autorizado
      </option>
      <option value='pendiente' className='text-purple-500'>
        Pendiente
      </option>
      <option value='rechazado' className='text-red-500'>
        Rechazado
      </option>
    </select>
  );
};

export default Usuarios;