let nome = document.querySelector("#Nome");
let prod = document.querySelector("#Produto");
let valor = document.querySelector("#ValorUn");
let add = document.querySelector("#Add");
let custoF = document.querySelector("#CustoF");
let perCap = document.querySelector("#PerCap");
let listP = document.querySelector("#listP");
let table1 = document.querySelector("#table1");
let table2 = document.querySelector("#table2");

let pessoas = 0;

add.addEventListener("click", adiciona);
custoF.addEventListener("click", Custos);
perCap.addEventListener("click", Custos);

function adiciona() {
  const p = document.createElement("li");
  p.textContent = `${nome.value}`;
    if(nome.value != ""){
        listP.appendChild(p);
        pessoas++;
        nome.value = "";
    }else{
        window.alert("Adicione um nome valido.");
    }
    
}

function Custos() {
  const custo = document.createElement("tr");
  const Produto = document.createElement("td");
  const val = document.createElement("td");
  
    if(prod.value != ""){
        Produto.textContent = `${prod.value}`;
        custo.appendChild(Produto);
    }else{
        window.alert("Adicione um produto valido.");
    }
    if(valor.value != ""){
        val.textContent = `${valor.value}`;
        custo.appendChild(val);
    }else{
        window.alert("Adicione um valor valido.")
    }
  

  if (this.id == "CustoF"){
    const Vdiv = val/pessoas;

    table1.appendChild(custo);
  }else{
    const Vmult = val*pessoas;

    table2.appendChild(custo);
  }
  
  vtp = Vdiv + Vmult;
  vTotal = val + Vmult;

  prod.value = "";
  valor.value = "";
}