const buttons = document.querySelectorAll('button');
var result = document.getElementById("resultado")
var var_op;

buttons.forEach((button) => {
    button.addEventListener("click",(event) => {
        let valor_ant = event.target.innerText
        if(valor_ant != null){
            var_op += valor_ant
            result.setAttribute('value', var_op)

        }
        
        console.log(var_op)
    })
})
