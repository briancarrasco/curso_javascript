// Pedir al usuario su nombre utilizando prompt
let nombre = prompt("¿Cual es tu nombre?:");

// Imprimir un saludo en la consola que incluya el nombre del usuario
console.log(`Hola, ${nombre}! Bienvenido.`);

// Declarar las variables a y b con valores numéricos
let a = 5;
let b = 10;

// Declarar la variable c como la suma de a y b
let c = a + b;

// Imprimir el resultado en la consola
console.log(`El valor de a es: ${a}`);
console.log(`El valor de b es: ${b}`);
console.log(`La suma de a y b es: ${c}`);


// Determinar cuál es el mayor
let mayor;

if (a >= b && a >= c) {
    mayor = a;
} else if (b >= a && b >= c) {
    mayor = b;
} else {
    mayor = c;
}

// Imprimir el resultado en la consola
console.log(`El valor de a es: ${a}`);
console.log(`El valor de b es: ${b}`);
console.log(`El valor de c es: ${c}`);
console.log(`El mayor de los tres numeros es: ${mayor}`);

// Pedir al usuario un número utilizando prompt
let numeroIngresado = prompt("Introduce un número y te dire si es par o impar:");

// Convertir el valor ingresado a un número
let numero = parseInt(numeroIngresado);

// Determinar si el número es par o impar
if (isNaN(numero)) {
    console.log("El valor ingresado no es un número válido.");
} else if (numero % 2 === 0) {
    console.log(`El número ${numero}, es par.`);
} else {
    console.log(`El número ${numero}, es impar.`);
}

// Inicializar la variable en 10
let variable = 10;

// Usar un bucle while para restarle 1 en cada iteración hasta que la variable sea igual a 0
while (variable > 0) {
    console.log(`${variable}`);
    variable--;
}

// Imprimir el valor final de la variable
console.log(`${variable}`);


// Usar un bucle do...while para pedirle al usuario que ingrese un número mayor a 100
do {
    numeroIngresado = prompt("Ingrese un número mayor a 100:");
    numero = parseInt(numeroIngresado);

    if (isNaN(numero)) {
        console.log("El valor ingresado no es un número válido.");
    }
} while (isNaN(numero) || numero <= 100);

// Mostrar el número ingresado en la consola
console.log(`Ingresaste un numero mayor a 100: ${numero}`);


// Definir la función esPar
function esPar(numero) {
  return numero % 2 === 0;
}

// Pedir al usuario que ingrese dos números utilizando prompt
let numeroIngresado1 = prompt("Por favor, introduce el primer número:");
let numero1 = parseInt(numeroIngresado1);

let numeroIngresado2 = prompt("Por favor, introduce el segundo número:");
let numero2 = parseInt(numeroIngresado2);

// Verificar si los valores ingresados son números válidos
if (isNaN(numero1) || isNaN(numero2)) {
  console.log("Uno o ambos valores ingresados no son números válidos.");
} else {
  // Probar la función con los números ingresados
  let resultado1 = esPar(numero1);
  let resultado2 = esPar(numero2);

  console.log(`El primer número ${numero1} es par: ${resultado1}`);
  console.log(`El segundo número ${numero2} es par: ${resultado2}`);
}

// Definir la función convertirCelsiusAFahrenheit
function convertirCelsiusAFahrenheit(celsius) {
  return celsius * 1.8 + 32;
}

// Pedir al usuario que ingrese un valor en grados Celsius utilizando prompt
let celsiusIngresado = prompt("Por favor, introduce un valor en grados Celsius:");
let celsius = parseFloat(celsiusIngresado);

// Verificar si el valor ingresado es un número válido
if (isNaN(celsius)) {
  console.log("El valor ingresado no es un número válido.");
} else {
  // Convertir el valor de Celsius a Fahrenheit
  let fahrenheit = convertirCelsiusAFahrenheit(celsius);

  // Mostrar el resultado en la consola
  console.log(`${celsius} grados Celsius son ${fahrenheit} grados Fahrenheit.`);
}

// Definir el objeto persona con las propiedades nombre, edad y ciudad
let persona = {
  nombre: "Ana",
  edad: 30,
  ciudad: "Madrid",

  // Método para cambiar la ciudad de la persona
  cambiarCiudad: function(nuevaCiudad) {
      this.ciudad = nuevaCiudad;
  }
};

// Usar el método para actualizar la ciudad
persona.cambiarCiudad("Barcelona");

// Mostrar las propiedades actualizadas en la consola
console.log(`Nombre: ${persona.nombre}`);
console.log(`Edad: ${persona.edad}`);
console.log(`Ciudad: ${persona.ciudad}`);


// Definir el objeto libro con las propiedades titulo, autor y año
let libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 2010,

  // Método para determinar si el libro tiene más de 10 años desde su publicación
  esAntiguo: function() {
      let añoActual = new Date().getFullYear();
      return añoActual - this.año > 10;
  }
};

// Usar el método para determinar si el libro es antiguo
let esAntiguo = libro.esAntiguo();

// Mostrar el resultado en la consola
console.log(`El libro "${libro.titulo}" de ${libro.autor} es antiguo: ${esAntiguo}`);


// Declarar el array numeros con los números del 1 al 10
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Declarar un nuevo array para almacenar los resultados
let numerosMultiplicados = [];

// Usar un bucle para multiplicar cada número por 2 y almacenar los resultados en el nuevo array
for (let i = 0; i < numeros.length; i++) {
    numerosMultiplicados.push(numeros[i] * 2);
}

// Mostrar el array original y el nuevo array en la consola
console.log("Numeros originales:", numeros);
console.log("Numeros multiplicados por 2:", numerosMultiplicados);


// Declarar un array vacío llamado pares
let pares = [];

// Usar un bucle for para iterar hasta 20 y agregar los primeros 10 números pares al array
for (let i = 1; pares.length < 10; i++) {
    if (i % 2 === 0) {
        pares.push(i);
    }
}

// Imprimir el array pares en la consola
console.log("Primeros 10 numeros pares:", pares);


// Función para cambiar el color de todos los elementos <p> a azul
function cambiarColorParrafos() {
  
  let parrafos = document.querySelectorAll('p');
  parrafos.forEach(function(parrafo) {
      parrafo.style.color = 'blue';
  });
}

document.getElementById('cambiarColorBtn').addEventListener('click', cambiarColorParrafos);

function mostrarAlerta() {
  let valorCampoTexto = document.getElementById('miCampoTexto').value;

  alert('Has ingresado: ' + valorCampoTexto);
}

document.getElementById('miBoton').addEventListener('click', mostrarAlerta);



// Función para manejar el evento click en los elementos de la lista
function mostrarTexto(evento) {
  let texto = evento.target.textContent;
  console.log(texto);
}

// Seleccionar todos los elementos <li> en la lista
let elementosLista = document.querySelectorAll('#miLista li');

// Agregar un evento click a cada elemento <li>
elementosLista.forEach(function(elemento) {
  elemento.addEventListener('click', mostrarTexto);
});

// Función para deshabilitar el campo de texto
function deshabilitarCampoTexto() {
  let campoTexto = document.getElementById('miCampoTexto1');
  campoTexto.disabled = true;
  campoTexto.classList.add('deshabilitado');
}

// Función para habilitar el campo de texto
function habilitarCampoTexto() {
  let campoTexto = document.getElementById('miCampoTexto1');
  campoTexto.disabled = false;
  campoTexto.classList.remove('deshabilitado');
}

document.getElementById('deshabilitarBtn').addEventListener('click', deshabilitarCampoTexto);
document.getElementById('habilitarBtn').addEventListener('click', habilitarCampoTexto);

// Función para guardar el correo en localStorage
function guardarCorreo(evento) {
  evento.preventDefault(); // Evitar el envío del formulario
  let correo = document.getElementById('correo').value;
  localStorage.setItem('correo', correo);
  mostrarCorreoGuardado();
}

// Función para mostrar el correo guardado en el DOM
function mostrarCorreoGuardado() {
  let correoGuardado = localStorage.getItem('correo');
  let correoGuardadoDiv = document.getElementById('correoGuardado');

  if (correoGuardado) {
      correoGuardadoDiv.innerHTML = `<p>Correo guardado: ${correoGuardado}</p>
                                <button id="eliminarCorreoBtn">Eliminar</button>`;
      document.getElementById('eliminarCorreoBtn').addEventListener('click', eliminarCorreo);
  } else {
      correoGuardadoDiv.innerHTML = '';
  }
}

// Función para eliminar el correo de localStorage
function eliminarCorreo() {
  localStorage.removeItem('correo');
  mostrarCorreoGuardado();
}

// Añadir evento de envío al formulario
document.getElementById('correoFormulario').addEventListener('submit', guardarCorreo);

// Mostrar el correo guardado al cargar la página
document.addEventListener('DOMContentLoaded', mostrarCorreoGuardado);





