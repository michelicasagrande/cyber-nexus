// script.js

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('reservaForm');
  const listaReservas = document.getElementById('listaReservas');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const nome = form.nome.value;
    const data = form.data.value;
    const horario = form.horario.value;

    const li = document.createElement('li');
    li.textContent = `${nome} reservou para ${data} às ${horario}`;
    listaReservas.appendChild(li);
    form.reset();
  });
});
