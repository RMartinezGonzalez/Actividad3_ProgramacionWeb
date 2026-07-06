function mostrarTooltip(elementoBoton) {
  const tooltip = document.getElementById('tooltip'); 
  
  const texto = elementoBoton.getAttribute('data-texto');
  const tipo = elementoBoton.getAttribute('data-tipo');

  tooltip.textContent = texto;
  tooltip.className = 'tooltip ' + tipo;

  const coordenadas = elementoBoton.getBoundingClientRect();

  tooltip.style.top = (coordenadas.top + window.scrollY - 60) + 'px';
  tooltip.style.left = (coordenadas.left + (elementoBoton.offsetWidth / 2) - (tooltip.offsetWidth / 2)) + 'px';
}

function ocultarTooltip() {
  const tooltip = document.getElementById('tooltip');

  tooltip.className = 'tooltip-oculto';
}