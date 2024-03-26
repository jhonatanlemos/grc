    const ctxRiscosMapeados = document.getElementById('grafico-riscos-mapeados').getContext('2d');
    const ctxProcessosComRiscos = document.getElementById('grafico-processos-com-riscos').getContext('2d');
    const ctxGravidadeDosRiscos = document.getElementById('grafico-gravidade-dos-riscos').getContext('2d');
    
    // Dados
    const dadosRiscosMapeados = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'Quantidade de Riscos Mapeados',
            data: [10, 15, 20, 25, 30],
            backgroundColor: '#428bca',
            borderColor: '#428bca',
            borderWidth: 1
        }]
    };
    
    const dadosProcessosComRiscos = {
        labels: ['Processos A', 'Processos B', 'Processos C', 'Processos D', 'Processos E'],
        datasets: [{
            data: [50, 70, 40, 60, 80],
            backgroundColor: ['#428bca', '#5cb85c', '#f0ad4e', '#d9534f', '#949fb1'],
            borderColor: ['#428bca', '#5cb85c', '#f0ad4e', '#d9534f', '#949fb1'],
            borderWidth: 1
        }]
    };
    
    const dadosGravidadeDosRiscos = {
        labels: ['Riscos Baixos', 'Riscos Médios', 'Riscos Altos'],
        datasets: [{
            data: [30, 40, 30],
            backgroundColor: ['#949fb1', '#f0ad4e', '#d9534f'],
            borderColor: ['#949fb1', '#f0ad4e', '#d9534f'],
            borderWidth: 1
        }]
    };
    
    // Criar os gráficos
    const graficoRiscosMapeados = new Chart(ctxRiscosMapeados, {
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
    
    const graficoProcessosComRiscos = new Chart(ctxProcessosComRiscos, {
        type: 'bar',
        data: dadosProcessosComRiscos,
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
    
    const graficoGravidadeDosRiscos = new Chart(ctxGravidadeDosRiscos, {
        type: 'pie',
        data: dadosGravidadeDosRiscos
    });