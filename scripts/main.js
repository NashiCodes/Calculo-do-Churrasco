let nome = document.querySelector("#Nome");
let produto = document.querySelector("#Produto");
let valor = document.querySelector("#ValorUn");
let add = document.querySelector("#Add");
let custoF = document.querySelector("#CustoF");
let perCap = document.querySelector("#PerCap");
let listP = document.querySelector("#listP");
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");
let divisao = document.querySelector("#divisao");
let botao = document.querySelectorAll(".remove-button");

var SomaCf = 0;
var SomaPc = 0;
var total = 0;
var xId = 0;
var pessoas = 0;

add.addEventListener("click", addPessoas);
custoF.addEventListener("click", addCustos);
perCap.addEventListener("click", addCustos);
for (let i = 0; i < botao.length; i++) {
  botao.addEventListener("click", () => {
    const pai = parentNode(this);
    const avo = parentNode(pai);
    avo.removeChild(pai);
  });
}

function addPessoas() {
  const li = document.createElement("li");
  if (nome.value != "") {
    li.textContent = `${nome.value}`;
    li.appendChild(criaBotao());
    listP.appendChild(li);
    pessoas++;
  } else {
    window.alert("Digite um nome valido");
  }
  nome.value = "";
  calculaTotal();
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
    custo.appendChild(criaBotao());
  } else {
    window.alert("Digite um produto valido");
  }

  if (this.id == "CustoF") {
    table1.appendChild(custo);
    calculaFixo(Number(valor.value));
  } else {
    table2.appendChild(custo);
    calculaPerCap(Number(valor.value));
  }

  calculaTotal();
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
    total /= pessoas;
    total = total.toFixed(2);
    divisao.textContent = `R$:${total}`;
  } else {
    window.alert("Pessoas insuficientes para Calcular o total");
  }
}

function criaBotao() {
  let removebtn = document.createElement("button");
  removebtn.id = xId;
  removebtn.className = "remove-button";

  xId++;
  return removebtn;
}
