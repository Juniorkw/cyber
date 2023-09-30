// Captura os botões e a área de conteúdo
var botao1 = document.getElementById("botao1");
var botao2 = document.getElementById("botao2");
var botao3 = document.getElementById("botao3");
var conteudo = document.getElementById("conteudo");

// Define os eventos de clique para cada botão
botao1.addEventListener("click", function() {
    conteudo.innerHTML = "MINIMUM <br> System: 64-bit Windows 10 <br> Processor: Core i7-6700 or Ryzen 5 1600 <br> Memory: 12 GB RAM <br> Graphics: GeForce GTX 1060 6GB or Radeon RX 580 8GB or Arc A380 <br> DirectX: Version 12 <br> Storage: 70 GB SSD"
    
});

botao2.addEventListener("click", function() {
    // Altera o texto e a imagem
    texto.innerHTML = "Texto do Botão 2 foi clicado.";
    
});

botao3.addEventListener("click", function() {
    // Altera o texto e a imagem
    texto.innerHTML = {}
    
});