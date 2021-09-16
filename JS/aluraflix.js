// Adriano Siqueira - 9-16-21 - Imersao Alura dev - aula 4

var catalogo = document.getElementById("catalogo");
var listaNomes = ["FlyBoys", "Tokio Drift", "Die Hard", "Rocky Balboa", "Tenacious D", "Batman"];
var listaFilmes = [
    "https://upload.wikimedia.org/wikipedia/pt/c/c8/Flyboys_Poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/2/2a/Die_hard_poster_promocional.png",
    "https://m.media-amazon.com/images/I/61SZsZYtwcL._AC_SL1001_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81fAkUxVJVL.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/b7/TheDarkKnightRises.jpg"
];

for (i = 0; i < listaFilmes.length; i++) {  
    // document.write("<img src=" + listaFilmes[i] + ">"); ->fazendo dessa forma, as tag img vao podem serem criadas em qualquer lugar, como no comeco da estrutura HTML, por exemplo

    var imgNova = document.createElement("img"); //cria uma nova tag img

    imgNova.setAttribute("src", listaFilmes[i]); //seta o atributo 'src' na tag img que foi criada e insere o valor listaFilmes[i]

    imgNova.setAttribute("alt", listaNomes[i]); //seta o atributo 'alt' na tag img criada, caso a imagem nao carregue, aparece o texto alternativo
    
    document.body.insertBefore(imgNova, catalogo); //insere a tag img criada depois da div catalogo, para evitar criar ela em outro local aleatorio
}