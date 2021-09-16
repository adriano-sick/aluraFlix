// Adriano Siqueira - 9-16-21 - Imersao Alura dev - aula 4

var catalogo = document.getElementById("catalogo");
var lista = [
    "https://upload.wikimedia.org/wikipedia/pt/c/c8/Flyboys_Poster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/f/f1/TFF-TokyoDrift-p%C3%B4ster.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/2/2a/Die_hard_poster_promocional.png",
    "https://m.media-amazon.com/images/I/61SZsZYtwcL._AC_SL1001_.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81fAkUxVJVL.jpg",
    "https://upload.wikimedia.org/wikipedia/pt/b/b7/TheDarkKnightRises.jpg"
];


spanImg(lista);

function spanImg(listaFilmes) {
    for (i = 0; i < listaFilmes.length; i++) {  
        // document.write("<img src=" + listaFilmes[i] + ">"); ->fazendo dessa forma, as tag img vao podem serem criadas em qualquer lugar, como no comeco da estrutura HTML, por exemplo
    
        var imgNova = document.createElement("img"); //cria uma nova tag img
    
        imgNova.setAttribute("src", listaFilmes[i]); //seta o atributo 'src' na tag img que foi criada e insere o valor listaFilmes[i]
        
        document.body.insertBefore(imgNova, catalogo); //insere a tag img criada antes da div catalogo, para evitar criar ela em outro local aleatorio
    }    
}


function adicionarFilme() {
    var novaLista = []; //lista auxiliar, criada a cada vez que essa funcao e chamada
    var input = document.getElementById('input').value;

    if(lista.indexOf(input) == -1) { //verificacao pra ver se url repete na lista        
        novaLista.push(input);
        spanImg(novaLista); //chama a funcao para adicionar a imagem da lista auxiliar
        aviso.innerHTML = "Filme Adicionado!"
        lista.push(novaLista[0]); //manda valor adicionado na lista auxiar para a lista principal.
    }
    else {
        aviso.innerText = "Essa URL ja foi Adicionada!!!"
    }    
}