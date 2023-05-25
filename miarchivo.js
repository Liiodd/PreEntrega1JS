// Definición de la clase Usuario
class Usuario {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
  
    saludar() {
      return `¡Hola ${this.nombre}! Tienes ${this.edad} años.`;
    }
  }
  
  // Array para almacenar los usuarios registrados
  const usuarios = [];
  
  // Función para registrar un usuario
  function registrarUsuario() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
  
    if (nombre === '' || edad === '') {
      alert('Por favor, ingrese todos los campos.');
      return;
    }
  
    const usuario = new Usuario(nombre, edad);
    usuarios.push(usuario);
  
    mostrarUsuarios();
    limpiarFormulario();
  }
  
  // Función para mostrar los usuarios registrados
  function mostrarUsuarios() {
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';
  
    if (usuarios.length === 0) {
      resultadoDiv.innerText = 'No se han registrado usuarios.';
      return;
    }
  
    const ul = document.createElement('ul');
  
    usuarios.forEach(function(usuario) {
      const li = document.createElement('li');
      li.innerText = usuario.saludar();
      ul.appendChild(li);
    });
  
    resultadoDiv.appendChild(ul);
  }
  
  // Función para limpiar el formulario después de registrar un usuario
  function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('edad').value = '';
  }
  
  // Obtener referencia al botón de registro
  const btnRegistrar = document.getElementById('btnRegistrar');
  
  // Vincular la función registrarUsuario() con el evento de clic del botón
  btnRegistrar.addEventListener('click', registrarUsuario);
  