let nome = document.querySelector("#Nome");
let produto = document.querySelector("#Produto");
let valor = document.querySelector("#ValorUn");
let add = document.querySelector("#Add");
let custoF = document.querySelector("#CustoF");
let perCap = document.querySelector("#PerCap");
let listP = document.querySelector("#listP");
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");

var SomaCf = 0;
var SomaPc = 0;
var total = 0;
let pessoas = 0;

let removebtn = document.createElement("img");

removebtn.id = "rBtn";
removebtn.class = "remove-button";
removebtn.src = "../images/x.png";

add.addEventListener("click", addPessoas);
custoF.addEventListener("click", addCustos);
perCap.addEventListener("click", addCustos);
removebtn.addEventListener("click", remove);

function addPessoas() {
  const li = document.createElement("li");
  if (nome.value != "") {
    li.textContent = `${nome.value}`;
    listP.appendChild(li);
    pessoas++;
  } else {
    window.alert("Digite um nome valido");
  }
  nome.value = "";
}

function addCustos() {
  const custo = document.createElement("tr");
  const Produto = document.createElement("td");
  const val = document.createElement("td");
  if (produto.value != "" && valor.value != "" && valor.value > 0) {
    Produto.textContent = `${produto.value}`;
    val.textContent = `${valor.value}`;
    custo.appendChild(Produto);
    custo.appendChild(val);
  } else window.alert("Produto Invalido!!");

  if (this.id == "CustoF") {
    table1.appendChild(custo);
    calculaFixo(valor.value);
  } else {
    table2.appendChild(custo);
    calculaPerCap(valor.value);
  }

  produto.value = "";
  valor.value = "";
}

function calculaFixo(val) {
  SomaCf += val;
}
function calculaPerCap(val) {
  SomaPc += val;
}

function calculaTotal() {
  if (pessoas > 0) {
    total = SomaPc * pessoas;
    total += SomaCf;
    total = total / pessoas;
  } else {
    window.alert("Pessoas insuficientes para Calcular o total");
  }
}

function remove() { 
  const pai = parentNode(this);
  const avo = parentNode(pai);
  avo.removeChild(pai);
}