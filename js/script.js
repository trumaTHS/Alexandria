// Função para carregar e processar o arquivo JSON
function carregarFrases(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open('GET', 'js/frases.json', true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == "200") {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }
  
  // Função para exibir um nome aleatório na página
  function exibirFraseAleatoria(frases) {
    var divFraseAleatoria = document.getElementById('frase');
    var fraseAleatoria = frases.frases[Math.floor(Math.random() * frases.frases.length)];
    divFraseAleatoria.innerHTML = "<label>" + fraseAleatoria + "</label>";
  }
  
  // Carregar nomes e exibir um aleatório quando a página carregar
  carregarFrases(exibirFraseAleatoria);  