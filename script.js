const titulo = "Theo Hernández faz hat-trick e França conquista título sobre o Brasil";
const subtitulo = "Notícia fictícia: lateral francês brilha na decisão e é eleito o melhor jogador da final.";

const paragrafos = [
`Em uma final emocionante, a França venceu o Brasil por 3 a 2 graças a uma atuação histórica de Theo Hernández. O lateral-esquerdo surpreendeu o mundo ao marcar os três gols da seleção francesa, garantindo um hat-trick inesquecível e levando os torcedores ao delírio.`,

`O Brasil chegou a empatar a partida em dois momentos diferentes, mas Theo Hernández apareceu novamente nos minutos finais para decidir o confronto. Com velocidade, precisão e muita personalidade, o camisa francês entrou para a história da competição com uma das maiores atuações já vistas em uma final.`,

`Após o apito final, Theo Hernández recebeu o prêmio de melhor jogador da decisão e comemorou o título ao lado dos companheiros. A atuação histórica rapidamente ganhou destaque na imprensa esportiva mundial, sendo lembrada como uma das maiores exibições individuais em finais internacionais.`
];

document.getElementById("titulo").textContent = titulo;
document.getElementById("subtitulo").textContent = subtitulo;

const noticia = document.getElementById("noticia");

paragrafos.forEach(texto => {
    const p = document.createElement("p");
    p.textContent = texto;
    noticia.appendChild(p);
});
