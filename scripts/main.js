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
var xId = 0;
let pessoas = 0;

let removebtn = document.createElement("img");

removebtn.id = "rBtn";
removebtn.className = "remove-button";
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
    listP.appendChild(removebtn);
    pessoas++;
    xId++;
  } else {
    window.alert("Digite um nome valido");
  }
  nome.value = "";

}

function addCustos() {
  const custo = document.createElement("tr");
  const Produto = document.createElement("td");
  const val = document.createElement("td");
  if (produto.value != "") {
    Produto.textContent = `${produto.value}`;
    custo.appendChild(Produto);
    custo.appendChild(removebtn);
    xId++;
  } else {
    window.alert("Digite um produto valido");
  }
  if (valor.value != "" && valor.value > 0) {
    val.textContent = `${valor.value}`;
    custo.appendChild(val);
    custo.appendChild(removebtn);
    xId++;
  } else {
    window.alert("Digite um valor valido");
  }


  if (this.id == "CustoF"){
    const Vdiv = val/pessoas;

    table1.appendChild(custo);
    table1.appendChild(removebtn);
    xId++;
  }else{
    const Vmult = val*pessoas;

    table2.appendChild(custo);
    table2.appendChild(removebtn);
    xId++;
  }
  
  vtp = Vdiv + Vmult;
  vTotal = val + Vmult;

  produto.value = "";
  valor.value = "";
}

function calculaFixo(val) {
  SomaCf += val;
}
function calculaPerCap(Val) {
  SomaPc += val;
}

function calculaTotal(val) {
  if (pessoas > 0) {
    total = SomaPc * pessoas;
    total += SomaCf;
    total = total / pessoas;
  } else {
    window.alert("Pessoas insuficientes para Calcular o total");
  }
}

function remove() {

}
