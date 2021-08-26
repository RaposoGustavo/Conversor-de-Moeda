function selecionar(){
    if(document.getElementById('dolar').checked){
        document.getElementById('value').placeholder='Digite um valor em Dólar'
    }
    
    if(document.getElementById('euro').checked){
        document.getElementById('value').placeholder='Digite um valor em Euro'
    }
}

function converter(){
    if(document.getElementById('dolar').checked){
        var val = document.getElementById('value').value
        var result = val * 5.423
        
        res.innerHTML = `R$${result.toFixed(2)}`
    }
    if(document.getElementById('euro').checked){
        var val = document.getElementById('value').value
        var result = val * 6.330
        
        res.innerHTML = `R$${result.toFixed(2)}`
    }
}