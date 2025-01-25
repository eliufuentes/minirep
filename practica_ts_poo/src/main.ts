import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import sintaxisTS from './sintaxis'
import { variable1 } from './prueba'
import { Estudiante } from './clases'
import { Coach } from './herencia'

//Llamando a la funcion de sintaxis
sintaxisTS();
console.log(variable1);
//creando un objeto
let estudiante1 = new Estudiante("Kenia","Chacon","kenia@gmail.com","KP001","123","FSJ24"); //inicializar el constructor
console.log(estudiante1);
estudiante1.nombre = "Maria Jose";
estudiante1.apellido = "Ramirez";
estudiante1.bootcamp = "Bootcamp FSJ24A";
//estudiante1.carnet = "KP455";
// estudiante1.password = "hh";
console.log(estudiante1.apellido);

estudiante1.saludar();
//Utilizando metodo get y set
estudiante1.setPassword("KP2024");
console.log(estudiante1.getPassword());


//crear un coach ()
let coach = new Coach("Oscar","Lemus","oscar@kodigo.org","oscar","12345-6","FSJ22");
console.log(coach);
coach.getDui(); //12345-6
coach.verPerfil();



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`
