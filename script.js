function getFinance(){

  const result  = fetch("https://api.hgbrasil.com/finance/quotations?format=json-cors&key=2fbecdab")
  .then((res)  => res.json())
  .then((data) => {
     return (data.results.currencies);
  });

  return result;
}


let middle = document.querySelector(".middle");

middle.addEventListener("click", async()=>{

  const result = await getFinance();
  console.log(`${JSON.stringify(result.USD.buy, undefined,2)}`);
  let valor = `${JSON.stringify(result.USD.buy, undefined,2)}`
  console.log("clicou");
  let real = document.querySelector("#real").value;

  real.value = real * parseFloat(valor);
  console.log(real.value);


})

