function inserir(valor) {
    document.getElementById('resultado').value += valor;
  }
  function limpar() {
    document.getElementById('resultado').value = '';
  }
  function apagar() {
    var resultado = document.getElementById('resultado').value;
    document.getElementById('resultado').value = resultado.slice(0, resultado.length - 1);
  }
  function calcular() {
    var resultado = eval(document.getElementById('resultado').value);
    document.getElementById('resultado').value = resultado;
  }