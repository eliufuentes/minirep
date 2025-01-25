import Swal from "sweetalert2";
//declarando el arreglo para guardar los cursos
let arregloCarrito = [];
/** accedemos al tbody especificando en la tabla que se encuentra con su id */
const bodyCarrito = document.querySelector('#lista-carrito tbody');

//e => representa un evento
export function agregarCurso(e){
    //classList
    //let buton = document.querySelector('button');
    //validamos los elementos html que contengan la clase 'button-carrito'
    if(e.target.classList.contains('button-carrito')){ //true / false
        //seleccionar los elementos que contenga el boton

        //seleccionamos el padre de la etiqueta (<button>)
        const cursoSeleccionado = e.target.parentElement.parentElement;
        //console.log(cursoSeleccionado);

        //una vez seleccionado el curso vamos a deshabilitar el boton
        //agregar clase => classList.add()
        e.target.classList.add('disabled');
        //cambiando el texto del boton
        e.target.textContent = 'Ir al carrito';
        
        //asignamos una alerta
        Swal.fire({
            icon: "success",
            title: "Agregaste un curso!",
            showConfirmButton: false,
            timer: 1500
        });
        //llamamos la funcion para leer los datos del curso que selecciono el usuario
        leerDatosCurso(cursoSeleccionado);
    }
}

//funcion para leer los datos del curso
function leerDatosCurso(curso){
    //convertimos la informacion del curso en un objeto
    const objetoCurso = {
        //clave - valor
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h5').textContent,
        precio: curso.querySelector('.precio').textContent,
        id: curso.querySelector('button').getAttribute('data-id')
    }
    //console.log(objetoCurso)
    //agregamos los cursos al arreglo
    arregloCarrito.push(objetoCurso);
    console.log(arregloCarrito);

    //una vez agregado los cursos al arreglo dibujamos en la table
    carritoHTML(); //reaccione
}

//Iterar el arreglo de los cursos en la tabla html
function carritoHTML(){
    //reseteamos el tbody
    bodyCarrito.innerHTML = "";
    //iterando un arreglo (map(), foreach(), for, while, do while)
    arregloCarrito.map(curso => {
        //creando una fila (tr)
        const fila = document.createElement('tr');
        //dibujando las celdas de cada fila

        //manera de concatenar (interpolacion de cadenas `${}`)
        fila.innerHTML = `
            <td>
                <img src="${curso.imagen}" width="100">
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>
                <a href="#" class="borrar_curso" data-id=${curso.id}>Eliminar</a>
            </td>
        `;
        //insertando las filas en <tbody>
        bodyCarrito.appendChild(fila)
    })
}

//removeChild

//funcion para eliminar un curso por su id
export function eliminarCurso(e){
    if(e.target.classList.contains('borrar_curso')){
        //obtenemos el data-id del curso que selecciono la persona
        const cursoId = e.target.getAttribute('data-id'); //id (2)

        //boton que voy habilitar si se elimina el curso
        const habilitarBoton = document.querySelector(`button[data-id="${cursoId}"]`); //<button >
        console.log(habilitarBoton);
        

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                //filtrando los cursos que sean diferente al id seleccionado
                arregloCarrito = arregloCarrito.filter(curso => curso.id !== cursoId);

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });

                //condicionamos para habilitar el boton
                if(habilitarBoton){
                    //removemos la clase "disabled"
                    habilitarBoton.classList.remove('disabled');

                    //cambiamos el texto
                    habilitarBoton.textContent = "Agregar al carrito";
                }
                //una vez filtrado el arreglo actualizalo en el html (tabla)
                carritoHTML();
            }
        });
    }
}