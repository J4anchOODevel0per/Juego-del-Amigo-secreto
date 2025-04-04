// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//listo vamos a comenzar que nosotros podemos
let nombresDeAmigos =[];
nombresDeAmigos.push('Serna', 'Edier', 'Juan David', 'Alejandro');

console.log(nombresDeAmigos);

// Función para sortear un amigo
function sortearAmigo() {
  // Array con los nombres de los amigos
  let amigos = ["Juan", "María", "Carlos", "Ana", "Sofía"]; // Puedes reemplazar con tu lista.

  // Validar que el array no esté vacío
  if (amigos.length === 0) {
      document.getElementById("resultado").innerHTML = "No hay amigos disponibles para el sorteo.";
      return;
  }

  // Generar un índice aleatorio
let indiceAleatorio = Math.floor(Math.random() * amigos.length);

  // Obtener el nombre sorteado
  let amigoSorteado = amigos[indiceAleatorio];

  // Mostrar el resultado en el HTML
  document.getElementById("resultado").innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}





function actualizarListaDeAmigos() {
  // Obtener el elemento de la lista HTML donde se mostrarán los amigos
  const listaAmigos = document.getElementById("listaAmigos");

  // Limpiar la lista existente
  listaAmigos.innerHTML = "";

  // Iterar sobre el arreglo `nombresDeAmigos` para agregar cada nombre como un elemento <li>
  for (let i = 0; i < nombresDeAmigos.length; i++) {
    // Crear un nuevo elemento <li>
    let li = document.createElement("li");

    // Asignar el nombre del amigo como texto del <li>
    li.textContent = nombresDeAmigos[i];

    // Agregar el <li> como hijo de la lista HTML
    listaAmigos.appendChild(li);
  }
}




function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const campoTexto = document.getElementById("amigo");
    const nuevoAmigo = campoTexto.value.trim(); // Eliminar espacios adicionales
  
    // Validar la entrada
    if (nuevoAmigo === "") { 
      alert("Por favor, inserte un nombre.");
      return; // Terminar la función si no hay un nombre válido
    }
  
    // Actualizar el array de amigos
    nombresDeAmigos.push(nuevoAmigo);
  
    // Actualizar la lista visible en la página
    actualizarListaVisual();
  
    // Limpiar el campo de entrada
    campoTexto.value = "";
  }
  
  // Función para actualizar la lista de amigos en el HTML
  function actualizarListaVisual() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista actual
  
    // Recorrer el array y crear un elemento <li> para cada amigo
    nombresDeAmigos.forEach((amigo) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
      });
}
actualizarListaVisual();

actualizarListaDeAmigos ();

sortearAmigo ();



