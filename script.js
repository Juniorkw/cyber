// Captura os botões e a área de conteúdo
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var conteudo = document.getElementById("conteudo");
var imagem = document.getElementById("imagem");
var botao0 = document.getElementById("botao0");
var caixaPesquisa = document.getElementById("caixaPesquisa");
var botaoPesquisar = document.getElementById("botaoPesquisar");
var resultados = document.getElementById("resultados");



// Função para definir o estado inicial da página com o conteúdo do botao0
function setEstadoInicial() {
    // Altera o texto e a imagem
    texto.innerHTML = "";
    // Oculta a imagem no estado inicial
    imagem.style.display = "none";
}

// Chama a função para definir o estado inicial da página
setEstadoInicial();

// Define os eventos de clique para cada botão
botao0.addEventListener("click", setEstadoInicial);

// Define os eventos de clique para cada botão

// Adiciona um evento de clique ao botão de pesquisa
botaoPesquisar.addEventListener("click", function() {
    // Obtenha o valor da caixa de pesquisa
    var termoPesquisa = caixaPesquisa.value.trim();

    // Limpa os resultados anteriores
    resultados.innerHTML = "";

    // Verifique se a caixa de pesquisa não está vazia
    if (termoPesquisa !== "") {
        // Você pode realizar a pesquisa aqui, por exemplo, com uma API ou uma lista de dados
        // Para este exemplo, apenas exibiremos o termo de pesquisa como resultado
        resultados.innerHTML = "Resultados para: " + termoPesquisa;
    } else {
        // Se a caixa de pesquisa estiver vazia, exiba uma mensagem de erro
        resultados.innerHTML = "Por favor, digite algo para pesquisar.";
    }
});
botao1.addEventListener("click", function() {
    texto.innerHTML = "MINIMUM <br> System: 64-bit Windows 10 <br> Processor: Core i7-6700 or Ryzen 5 1600 <br> Memory: 12 GB RAM <br> Graphics: GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380 <br> DirectX: Version 12 <br> Storage: 70 GB SSD "
    
    imagem.style.display = "none";
   
    
});
imagem.style.display = "none";
botao2.addEventListener("click", function() {
    // Altera o texto e a imagem
    texto.innerHTML = "";
     // Exibe a imagem quando o botão 2 é clicado
     imagem.style.display = "block";
     imagem.src = "imagens/cyberpunk1.jpg";
     imagem.src = "imagens/cyberpunk2.jpg";
     imagem.src = "imagens/cyberpunk3.jpg";
     imagem.src = "imagens/cyberpunk4.jpg";
     imagem.src = "imagens/1-eng-phantom-liberty.png"; // Substitua pelo caminho da sua imagem
     
});





botao3.addEventListener("click", function() {
    // Altera o texto e a imagem
    texto.innerHTML =   "Game Title: Cyberpunk 2077: Phantom Liberty Store <br><br> Page: <a href='https://www.gog.com/en/game/cyberpunk_2077_phantom_liberty' target='_blank'>https://www.gog.com/en/game/cyberpunk_2077_phantom_liberty</a> <br><br> Metacritic: <a href='https://www.metacritic.com/search/game/cyberpunk-2077-phantom-liberty/results/' target='_blank'>https://www.metacritic.com/game/cyberpunk-2077-phantom-liberty/</a> <br><br> Genre: ROLE-PLAYINGACTIONSCI-FI <br><br> Developer: CD PROJEKT RED <br><br> Publisher: CD PROJEKT RED <br><br> User Rating: 3.4 out of 5 based on 110 user reviews   <br><br> Release Date: 26 Sept, 2023 <br><br> Cyberpunk 2077 Phantom Liberty MULTi19-GOG <br><br> SIZE: 153 GB";
    imagem.style.display = "none";
    // Adicione um evento de clique para os links
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Impede o comportamento padrão de abrir o link
            var url = link.getAttribute('href'); // Obtém a URL do atributo href do link
            window.open(url, '_blank'); // Abre a URL em uma nova guia
        });
    });
});

 