
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
