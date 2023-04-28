function getDataAtual() {
  const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
  const data = new Date();
  const diaDaSemana = diasDaSemana[data.getDay()];
  const mes = meses[data.getMonth()];
  const ano = data.getFullYear();
  return `${diaDaSemana}, ${mes} de ${ano}`;
}
function definirHorarioAtual() {
    const data = new Date();
    const horarioAtual = data.toLocaleTimeString();
    return horarioAtual;
}

const data = document.getElementById('data');
const hora = document.getElementById('hora');

data.innerHTML = getDataAtual();
hora.innerHTML = definirHorarioAtual();
