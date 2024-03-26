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