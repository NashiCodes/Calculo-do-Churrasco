let nome = document.querySelector("#Nome");
let prod = document.querySelector("#Produto");
let valor = document.querySelector("#ValorUn");
let add = document.querySelector("#Add");
let custoF = document.querySelector("#CustoF");
let perCap = document.querySelector("#PerCap");
let listP = document.querySelector("#listP");
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");

let removebtn = document.createElement("img");

removebtn.id ="rBtn";
removebtn.class ="remove-button";
removebtn.src ="../images/x.png";

let pessoas = 0;

add.addEventListener("click", adiciona);
custoF.addEventListener("click", Custos);
perCap.addEventListener("click", Custos);
removebtn.addEventListener("click", remove);

function adiciona() {
  const p = document.createElement("li");
  if(nome.value != ""){
    p.textContent = `${nome.value}`;
    listP.appendChild(p);
    pessoas++;
  }else {
    window.alert("Digite um nome valido");
  }
  nome.value = "";
}

function Custos() {
  const custo = document.createElement("tr");
  const Produto = document.createElement("td");
  const val = document.createElement("td");
  if(prod.value != ""){
    Produto.textContent = `${prod.value}`;
    custo.appendChild(Produto);
  } else{
    window.alert("Digite um produto valido");
  }
  if(valor.value != "" && valor.value > 0){
    val.textContent = `${valor.value}`;
    custo.appendChild(val);
  } else{
    window.alert("Digite um valor valido");
  }
  
  if (this.id == "CustoF") table1.appendChild(custo);
  else table2.appendChild(custo);

  prod.value = "";
  valor.value = "";
}

function remove (){
}