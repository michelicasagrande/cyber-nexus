const cardapio = [
  { nome: 'Pão de Queijo', tipo: 'Comida', preco: 3.50 },
  { nome: 'Coxinha', tipo: 'Comida', preco: 5.00 },
  { nome: 'Café Preto', tipo: 'Bebida', preco: 2.00 },
  { nome: 'Suco de Laranja', tipo: 'Bebida', preco: 4.50 }
];

function atualizarCardapio() {
  const tabela = document.getElementById('tabelaCardapio');
  tabela.innerHTML = '';
  cardapio.forEach(item => {
    const row = `<tr><td>${item.nome}</td><td>${item.tipo}</td><td>${item.preco.toFixed(2)}</td></tr>`;
    tabela.innerHTML += row;
  });
}

document.getElementById('formGerenciar').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('itemNome').value;
  const tipo = document.getElementById('itemTipo').value;
  const preco = parseFloat(document.getElementById('itemPreco').value);
  cardapio.push({ nome, tipo, preco });
  atualizarCardapio();
  this.reset();
});

document.getElementById('reservaForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this.nome.value;
  const data = this.data.value;
  const horario = this.horario.value;
  const li = document.createElement('li');
  li.textContent = `${nome} reservou para ${data} às ${horario}`;
  document.getElementById('listaReservas').appendChild(li);
  this.reset();
});

atualizarCardapio();
