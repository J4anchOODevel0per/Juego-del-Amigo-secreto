// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//listo vamos a comenzar que nosotros podemos
let nombresDeAmigos =[];
nombresDeAmigos.push('Serna', 'Edier', 'Juan David', 'Alejandro');

console.log(nombresDeAmigos);

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




