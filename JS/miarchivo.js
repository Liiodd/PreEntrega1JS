function calcularPrecio() {
    var precioBase = parseFloat(document.getElementById("producto").value);
    var interes = 0; // Porcentaje de interés
    var cuotas = parseInt(document.querySelector('input[name="cuotas"]:checked').value);
    var envio = 0; // Valor del envío
    
    // Calcular interés según la cantidad de cuotas o  descuento pago en efectivo
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
  
    // Calcular valor del envío según la opción seleccionada
    var envioSeleccionado = document.querySelector('input[name="envio"]:checked').value;
    switch (envioSeleccionado) {
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
    var montoCuota = precioBase * interes;
    var precioFinal = precioBase + montoCuota + envio;
    
    // Mostrar precio final con formato de separador de miles y punto como separador decimal
    var precioFinalFormateado = precioFinal.toLocaleString('es-AR', {style: 'currency', currency: 'ARS'});
    document.getElementById("precioFinal").innerHTML = precioFinalFormateado;
}
