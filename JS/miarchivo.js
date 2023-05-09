function calcularPrecio() {
  const producto = document.getElementById("producto");
  const precioBase = parseFloat(producto.value);
  if (!precioBase || precioBase <= 0) {
      document.getElementById("precioFinal").innerHTML = "Ingrese un precio válido";
      return;
  }

  let interes = 0; // Porcentaje de interés
  const cuotasSeleccionadas = document.querySelectorAll('input[name="cuotas"]:checked');
  if (cuotasSeleccionadas.length === 0) {
      document.getElementById("precioFinal").innerHTML = "Seleccione una cantidad de cuotas";
      return;
  }
  const cuotas = parseInt(cuotasSeleccionadas[0].value);
  switch (cuotas) {
      case 1:
          interes = -0.08; // dev. 8%
          break;
      case 3:
          interes = 0.05; // 5%
          break;
      case 6:
          interes = 0.10; // 10%
          break;
      case 12:
          interes = 0.18; // 18%
          break;
      default:
          interes = 0;
          break;
  }

  let envio = 0; // Valor del envío
  const envioSeleccionado = document.querySelector('input[name="envio"]:checked');
  if (!envioSeleccionado) {
      document.getElementById("precioFinal").innerHTML = "Seleccione una opción de envío";
      return;
  }
  switch (envioSeleccionado.value) {
      case "envioDia":
          envio = 1200;
          break;
      case "envio3a5":
          envio = 1000;
          break;
      case "envio5a7":
          envio = 1500;
          break;
      default:
          envio = 0;
          break;
  }

  // Calcular precio final
  const montoCuota = precioBase * interes;
  const precioFinal = precioBase + montoCuota + envio;

  //Precio final con separador de miles y punto como separador decimal
  const precioFinalFormateado = precioFinal.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'});
  document.getElementById("precioFinal").innerHTML = precioFinalFormateado;
}
