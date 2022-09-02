function jsonUrl(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function main (){
    let dados = jsonUrl("https://servicodados.ibge.gov.br/api/v1/localidades/estados/")
    /* link to extract information from Json */
    let informacoes = JSON.parse(dados);
    console.log(informacoes)
   
}

main();