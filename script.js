

function Rolou(Lados){
    return Math.floor(Math.random() * Lados) + 1

}


function rolouLegal(){
    
    var tipoDado = document.getElementById("dadosopicoe").value
    var Resultado = Rolou(parseInt(tipoDado))
    document.getElementById("resultado").innerText = `Você rolou: ${Resultado}`;

    if (tipoDado == "nulo"){
        document.getElementById("resultado").innerText =  "Escolha um dado"
        
    }
   
}

 