// Definición de la clase Usuario
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    let mensaje = `¡Hola ${this.nombre}! Te estábamos esperando. Tienes ${this.edad} años.`;
    if (this.edad > 40) {
      mensaje += ' 👴';
    } else {
      mensaje += ' 😄';
    }
    return mensaje;
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

// Función para buscar usuarios por nombre
function buscarUsuariosPorNombre() {
  const busquedaNombre = document.getElementById('busquedaNombre').value;
  if (busquedaNombre === '') {
    mostrarUsuarios(); // Mostrar todos los usuarios si no se ingresa un nombre de búsqueda
    return;
  }

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  let encontrado = false;

  const ul = document.createElement('ul');

  usuarios.forEach(function(usuario) {
    if (usuario.nombre.toLowerCase().includes(busquedaNombre.toLowerCase())) {
      const li = document.createElement('li');
      li.innerText = `Pude encontrar este usuario registrado:
      Nombre: ${usuario.nombre} Edad: ${usuario.edad} años.`;
      ul.appendChild(li);
      encontrado = true;
    }
  });

  if (!encontrado) {
    const li = document.createElement('li');
    li.innerText = `No conozco a nadie llamado ${busquedaNombre} 😞. Trata con otro nombre!`;
    ul.appendChild(li);
  }

  resultadoDiv.appendChild(ul);
}

// Obtener referencia al botón de búsqueda por nombre
const btnBuscarNombre = document.getElementById('btnBuscarNombre');

// Vincular la función buscarUsuariosPorNombre() con el evento de clic del botón de búsqueda por nombre
btnBuscarNombre.addEventListener('click', buscarUsuariosPorNombre);


// Función para filtrar usuarios por edad
function filtrarUsuariosPorEdad() {
  const edadMinima = parseInt(document.getElementById('filtroEdadMin').value);
  const edadMaxima = parseInt(document.getElementById('filtroEdadMax').value);

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = '';

  const ul = document.createElement('ul');
  let encontrado = false;

  usuarios.forEach(function(usuario) {
    if (usuario.edad >= edadMinima && usuario.edad <= edadMaxima) {
      const li = document.createElement('li');
      li.innerText = `Pude encontrar este usuario registrado:
      Nombre: ${usuario.nombre} Edad: ${usuario.edad} años.`;
      ul.appendChild(li);
      encontrado = true;
    }
  });

  if (!encontrado) {
    const li = document.createElement('li');
    li.innerText = `No encontre usuarios registrador en el rango de edad especificado.`;
    ul.appendChild(li);
  }

  resultadoDiv.appendChild(ul);
}

// Obtener referencia al botón de filtrar por edad
const btnFiltrarEdad = document.getElementById('btnFiltrarEdad');

// Vincular la función filtrarUsuariosPorEdad() con el evento de clic del botón de filtrar por edad
btnFiltrarEdad.addEventListener('click', filtrarUsuariosPorEdad);

