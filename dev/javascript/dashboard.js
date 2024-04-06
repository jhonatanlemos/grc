// Contexto
var ctxRiscosMapeados = document.getElementById('grafico-riscos-mapeados').getContext('2d');

// Dados
var dadosRiscosMapeados = {
labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
datasets: [{
    label: 'Quantidade de Riscos Mapeados',
    data: [10, 15, 20, 25, 30],
    backgroundColor: '#428bca',
    borderColor: '#428bca',
    borderWidth: 1
}]
};

// Criar os gráficos
var graficoRiscosMapeados = new Chart(ctxRiscosMapeados, {
type: 'line',
data: dadosRiscosMapeados,
options: {
    scales: {
    yAxes: [{
        ticks: {
        beginAtZero: true
        }
    }]
    }
}
});












// Gerar valores aleatórios
function generateRandomData() {
  const data = [];
  const labels = ['A', 'B', 'C', 'D', 'E'];

  for (let i = 0; i < 5; i++) {
    data.push(Math.floor(Math.random() * 100));
  }

  return {
    labels: labels,
    data: data
  };
}

// Inicializar o gráfico

  const randomData = generateRandomData();

  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: randomData.labels,
      datasets: [{
        label: 'Valores Aleatórios',
        data: randomData.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });