
/*vf= valor futuro
    vp = valor presente
    i = cdb
    t = tempo

    vf= vp (1 + i)^t
*/

//variaveis fixas 
let ipca = 5.77;
let ir = 22.5;


const valorInicialInput = document.getElementById("valor-inicial");
const periodoInput = document.getElementById("periodo");
const calcularButton = document.getElementById("calcular");
const todoList = document.querySelector("#todo-resultado");

const resultadoRendaFixa = (resultado, valorLiq, valorFinal, renda)=>{
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const resul = document.createElement("div");
    resul.classList.add("resultados");
    //resul.innerText = `valor bruto ${resultado} quanto rendeu ${renda}  valor liquido ${valorLiq}  valor real ${valorFinal} `;
    resul.innerHTML = `<div class = "editresul"> <h2 >Resultado</h2> valor futuro ${resultado}<br> quanto rendeu ${renda}<br> valor liquido ${valorLiq}<br> valor real ${valorFinal}</div>`
    todo.appendChild(resul);

    todoList.appendChild(todo);
    valorInicialInput.value = "";
    periodoInput.value = "";
    valorInicialInput.focus();
}

calcularButton.addEventListener("click", () => {
  const valorInicial = parseFloat(valorInicialInput.value);
  const taxaJuros = 13.65/100;//troca
  const periodo = parseFloat(periodoInput.value)/12;

  const valorFuturo = valorInicial * Math.pow((1 + taxaJuros), periodo);
  const renda = valorFuturo - valorInicial;

  const vrr = renda * (ir/100)
  console.log(vrr);
  const valorLiq = valorFuturo - vrr;

 const valorFinal = valorLiq - ir - ipca;


  resultadoRendaFixa(valorFuturo.toFixed(2), valorLiq.toFixed(2), valorFinal.toFixed(2),renda.toFixed(2));
});