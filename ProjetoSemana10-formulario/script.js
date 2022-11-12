
const cadastraSeries = () => {
    let nomeSerie = document.forms["cadastrar"]["nome-serie"];
    let anoLancamento = document.forms["cadastrar"]["ano-lancamento"];
    let temporadas =document.forms["cadastrar"]["temporadas"] ;
    let resumo = document.forms["cadastrar"]["resumo"];

    
    let seriesCadastradas = document.getElementById('insere-series');
    
    seriesCadastradas.innerHTML += `
    <h3>${nomeSerie.value}</h3>
    <p>Lançamento: ${anoLancamento.value}</p>
    <p>Temporadas: ${temporadas.value}</p>
    <p>Sinopse: ${resumo.value}</p>
    `
    //limpar os campos
    nomeSerie.value = "";
    anoLancamento.value= "";
    temporadas.value = "";
    resumo.value= "";
}


