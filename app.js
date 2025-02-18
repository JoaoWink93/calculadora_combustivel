function botaoCalcular() {
    let valorLitro = parseFloat(document.getElementById('fuel-price').value);
    let distancia = parseFloat(document.getElementById('distance').value);
    let consumo = parseFloat(document.getElementById('fuel-efficiency').value);
    let quantidadeCombustivel = distancia / consumo;
    let valorTotal = quantidadeCombustivel * valorLitro;
    let valorFormatado = valorTotal.toFixed(2);
    
    document.getElementById('result').innerHTML = `O valor para a viagem é: R$${valorFormatado}.`
    limparTexto();
}


function limparTexto() {
    document.getElementById('fuel-price').value = '';
    document.getElementById('distance').value = '';
    document.getElementById('fuel-efficiency').value = '';
}