
const PASTA_IMAGENS = "fotos/";

const meses = [
  "janeiro","fevereiro","março","abril","maio","junho",
  "julho","agosto","setembro","outubro","novembro","dezembro"
];

const diasSemana = [
  "domingo","segunda-feira","terça-feira","quarta-feira",
  "quinta-feira","sexta-feira","sábado"
];

const arquivoPorSigno = {
  "Áries": "aries.jpg",
  "Touro": "touro.jpg",
  "Gêmeos": "gemeos.jpg",
  "Câncer": "Cancer.jpg",
  "Leão": "leao.jpg",
  "Virgem": "virgem.jpg",
  "Libra": "libra1.webp",
  "Escorpião": "escorpiao.jpg",
  "Sagitário": "sagitario.jpg",
  "Capricórnio": "capricornio.jpg",
  "Aquário": "Aquario.jpg",
  "Peixes": "peixes.jpg"
};

function Mostrar() {

  const diaInput = document.getElementById("boxdianascimento").value.trim();
  const mesInput = document.getElementById("boxmesnascimento").value.trim();
  const anoInput = document.getElementById("boxanonascimento").value.trim();

  if (!validarEntrada(diaInput, mesInput, anoInput)) return;

  const dia = parseInt(diaInput);
  const mes = parseInt(mesInput);
  const ano = parseInt(anoInput);

  const data = new Date(ano, mes - 1, dia);

  if (!dataValida(data, dia, mes, ano)) {
    alert("Data inválida!");
    return;
  }

  preencherInformacoes(data, dia, mes, ano);
}

function validarEntrada(dia, mes, ano) {

  if (dia === "" || isNaN(dia) || dia < 1 || dia > 31) {
    alert("Digite um dia válido!");
    return false;
  }

  if (mes === "" || isNaN(mes) || mes < 1 || mes > 12) {
    alert("Digite um mês válido!");
    return false;
  }

  if (ano === "" || isNaN(ano) || ano.length !== 4) {
    alert("Digite um ano válido!");
    return false;
  }

  return true;
}

function dataValida(data, dia, mes, ano) {
  return (
    data.getFullYear() === ano &&
    data.getMonth() === mes - 1 &&
    data.getDate() === dia
  );
}


function preencherInformacoes(data, dia, mes, ano) {

  document.getElementById("mesnascimento").value = meses[mes - 1];
  document.getElementById("diadasemanaquenasceu").value =
    diasSemana[data.getDay()];

  calcularIdade(dia, mes, ano);
  atualizarImagemSigno(dia, mes);
}

function calcularIdade(dia, mes, ano) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - ano;

  if (
    hoje.getMonth() < mes - 1 ||
    (hoje.getMonth() === mes - 1 && hoje.getDate() < dia)
  ) {
    idade--;
  }

  document.getElementById("idadenascimento").value = idade;
}

function atualizarImagemSigno(dia, mes) {
  const signo = descobrirSigno(dia, mes);
  const img = document.getElementById("signo1");
  const arquivo = arquivoPorSigno[signo];

  if (arquivo) {
    img.src = PASTA_IMAGENS + arquivo;
    img.alt = signo;
  } else {
    img.src = PASTA_IMAGENS + "vazio.png";
  }
}
// ==========================
// SIGNOS
// ==========================

function descobrirSigno(dia, mes) {

  if ((mes==3 && dia>=21)||(mes==4 && dia<=19)) return "Áries";
  if ((mes==4 && dia>=20)||(mes==5 && dia<=20)) return "Touro";
  if ((mes==5 && dia>=21)||(mes==6 && dia<=20)) return "Gêmeos";
  if ((mes==6 && dia>=21)||(mes==7 && dia<=22)) return "Câncer";
  if ((mes==7 && dia>=23)||(mes==8 && dia<=22)) return "Leão";
  if ((mes==8 && dia>=23)||(mes==9 && dia<=22)) return "Virgem";
  if ((mes==9 && dia>=23)||(mes==10 && dia<=22)) return "Libra";
  if ((mes==10 && dia>=23)||(mes==11 && dia<=21)) return "Escorpião";
  if ((mes==11 && dia>=22)||(mes==12 && dia<=21)) return "Sagitário";
  if ((mes==12 && dia>=22)||(mes==1 && dia<=19)) return "Capricórnio";
  if ((mes==1 && dia>=20)||(mes==2 && dia<=18)) return "Aquário";
  return "Peixes";
}