import React from 'react'
import { useForm } from 'react-hook-form'
//importando la funcion para iniciar sesion (correo / password)
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import {auth_user, providerGoogle} from '../../firebase/appConfig'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

export default function Login() {
    const { register, handleSubmit, formState: {errors} } = useForm()

    //metodo para iniciar sesion
    const loginForm = (data) => {
        
        signInWithEmailAndPassword(auth_user, data.email, data.password)
        .then((userCredentiales) => {
            //si el usuario existe extraemos solo su informacion (.user)
            const user = userCredentiales.user
            console.log(user);

            //guardando la informacion del usuario en el localstorage
            saveLocalStorage("user_firebase",JSON.stringify(user))
        }).catch((error) => {
            console.error(error.message)
            Swal.fire({
                title: "Credenciales Invalidas",
                text: "Revisa tu informacion",
                icon: "warning"
            });
        })
    } 
    
    //metodo para iniciar sesion con google
    const loginGoogle = async () => {
        //metodo que permite autenticar a travez de un proveedor externo
        try{
            const result = await signInWithPopup(auth_user, providerGoogle);
            console.log(result.user);
            //almacenamos la info del usuario al storage
            saveLocalStorage("user_firebase",JSON.stringify(result.user))
        }catch(error){
            console.error(error.message)
            Swal.fire({
                title: "Error al autenticarse con Google",
                text: "Revisa tu informacion",
                icon: "warning"
            });
        }
    }

    //metodo que nos va guardar el usuario en el localstorage
    const saveLocalStorage = (key, data) => {
        //localStorage (setItem, getItem)
        localStorage.setItem(key, data);
    }

    return (
        <div>
            <h1>Inicio de sesion</h1>
            <div>
                <button onClick={loginGoogle}>Ingresar con Google</button>
            </div>
            <hr />
            <form onSubmit={handleSubmit(loginForm)}>
                <div>
                    <label htmlFor="">Correo Electronico</label>
                    <input type="email" placeholder='Ingrese su correo' {...register('email', {required: true})}/>
                    {errors.email && <span style={{color: "red"}}>Campo Obligatorio</span>}
                </div>

                <div>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" placeholder='Ingrese su contraseña' {...register('password', {required: true})}/>
                    {errors.password && <span style={{color: "red"}}>Campo Obligatorio</span>}
                </div>
                <button type='submit'>Iniciar Sesion</button>
            </form>

            <section>
                <p>Si no tienes cuenta <Link to="/registrar">Registrate Aqui!</Link></p>
            </section>
        </div>
    )
}
