const cidades = [
    {nome: 'curitiba', estado: 'PR', capital: true},
    {nome: 'maringá', estado: 'PR', capital: false},
    {nome: 'londrina', estado: 'PR', capital: false},
    {nome: 'pinhais', estado: 'PR', capital: false},
    {nome: 'chapecó', estado: 'SC', capital: false},
    {nome: 'joinvile', estado: 'SC', capital: false},
    {nome: 'blumenau', estado: 'SC', capital: false},
    {nome: 'florianópolis', estado: 'SC', capital: true},
    {nome: 'porto alegre', estado: 'RS', capital: true},
    {nome: 'gramado', estado: 'RS', capital: false}
];

function descobrindo(){
    document.getElementById('pertence').innerHTML = '';
    document.getElementById('capital').innerHTML = '';
    let cidade = document.getElementById("input").value;
    for (const key in cidades) {
        if(cidades[key].nome == cidade.toLowerCase()){
            document.getElementById('pertence').innerHTML = "Pertence ao " + cidades[key].estado;
            if(cidades[key].capital){
                document.getElementById('capital').innerHTML = '&Eacute capital';
            } else {
                document.getElementById('capital').innerHTML = 'N&atildeo &eacute capital';
            }
            break;
        } else {
            document.getElementById('pertence').innerHTML = 'Cidade desconhecida';
        }
    }
  
}