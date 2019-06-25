function processando(){
    let texto = document.getElementById("input").value;
    document.getElementById('tamanho').innerHTML = contaTamanho(texto);
    document.getElementById('branco').innerHTML = contaBranco(texto);
    document.getElementById('vogais').innerHTML = contaVogais(texto);
}

// Conta os caractéres do texto
function contaTamanho(txt) {
    return ("Seu texto possui " + txt.length + " caracteres.");
}

// Conta as vogais do texto
function contaVogais(txt) {
    const vogaisLista = ['A','E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u'];
    var vcount = 0;
  
    for(var x = 0; x < txt.length ; x++)
    {
      if (vogaisLista.indexOf(txt[x]) !== -1)
      {
        vcount += 1;
      }
    
    }
    return ("Seu texto possui " + vcount + " vogais.");
}

// Conta os espaços em branco do texto
function contaBranco(txt) {
    let branco =  txt.split(" ").length-1;
    return ("Seu texto possui " + branco + "  espaços em branco.");
}