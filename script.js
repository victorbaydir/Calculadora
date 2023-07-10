const buttons = document.querySelectorAll('button');
let result = document.querySelector("#resultadoTESTE")
let var_op = "";

/*Para cada button estou adicionando um evento click
O evento atribui o innerText do button ao valor_ant para posteriormente montar toda expressão*/
buttons.forEach((button) => {
    button.addEventListener("click",(event) => {
        let valor_ant = event.target.innerText
        
        if(valor_ant != '='){
            if(valor_ant == 'CE'){
                var_op = ""
            } else if(valor_ant == 'C'){
                var_op = var_op.slice(0, -1);
            } else if(valor_ant != null && valor_ant != 'CE' && valor_ant != 'C'){
                
                /*Neste if, verifico por callback se o usuário não está adicionando uma operação duplicada, o que pode 
                acarretar em erro no eval()
                
                Exemplo, caso ele selecione "2+, o var_op ficará carregado com esse valor. Caso ele tente 
                adicionar um "/" em seguida, o slice(-1) verifica o último elemento do var_op e retorna um alert ou não*/
                if(verificarOperacaoConj(var_op, valor_ant)){
                    window.alert("Não é possível selecionar duas operações juntas.")
                } else {
                    var_op += valor_ant
                }
                
            }   
            
        } else {
            calcularResultado(var_op)
        }
        result.innerText = var_op
    }
    )
})

function verificarOperacaoConj(var_op, valor_ant){
    return (var_op.slice(-1) == '+' ||
    var_op.slice(-1) == '-' ||
    var_op.slice(-1) == '*' ||
    var_op.slice(-1) == '/') && 
    (valor_ant == '+' ||
    valor_ant == '-' ||
    valor_ant == '*' ||
    valor_ant == '/');
}

function calcularResultado(var_resultado){
    try{
        if(var_resultado != null && var_resultado != ''){
            var_op = eval(var_resultado)
            result.innerText = var_op
            // result.innerText = var_resultText
            console.log(result)
        } else {
            alert("Digite um número para prosseguir!")
        }
    } catch(e) {
        
        console.log(e)
    }
    
}