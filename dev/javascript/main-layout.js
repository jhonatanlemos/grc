// Registro de Variáveis

var itemLink = document.querySelectorAll('.item-link')
var itemSubLink = document.querySelectorAll('.item-sublink')

var icnBurguer = document.querySelector('.btn-burguer')
var icnBurguerExpandido = document.querySelector('.btn-burguer expandir')
var menuLateral = document.querySelector('.menu-lateral')
var logoDetails = document.querySelector('.logo-details')
var logoGRC = document.querySelector('.logo-grc')
var txtLogo = document.querySelector('.txt-logo')
var mainContent = document.querySelector('#conteudo')
var iconeMenu = document.querySelectorAll('.icon')

var icnSetaLateral = document.querySelectorAll('#seta-lateral')
var icnSetaProcessos = document.querySelector('#seta-processos')
var icnSetaRiscos = document.querySelector('#seta-riscos')
var icnSetaControles = document.querySelector('#seta-controles')
var icnSetaApontamentos = document.querySelector('#seta-apontamentos')
var icnSetaAuditoria = document.querySelector('#seta-auditoria')
var icnSetaCompliance = document.querySelector('#seta-compliance')

var itemMenu = document.querySelectorAll('.item-menu')
var itemMenuHome = document.querySelector('#item-menu-home')
var itemMenuDashboard = document.querySelector('#item-menu-dashboard')
var itemMenuAprovacoes = document.querySelector('#item-menu-aprovacoes')
var itemMenuProcessos = document.querySelector('#item-menu-processos')
var itemMenuRiscos = document.querySelector('#item-menu-riscos')
var itemMenuControles = document.querySelector('#item-menu-controles')
var itemMenuApontamentos = document.querySelector('#item-menu-apontamentos')
var itemMenuAuditoria = document.querySelector('#item-menu-auditoria')
var itemMenuCompliance = document.querySelector('#item-menu-compliance')

var itemSubMenu = document.querySelectorAll('#item-sub-menu-geral')
var itemSubMenuProcessos = document.querySelector('.item-sub-menu-processos')
var itemSubMenuRiscos = document.querySelector('.item-sub-menu-riscos')
var itemSubMenuControles = document.querySelector('.item-sub-menu-controles')
var itemSubMenuApontamentos = document.querySelector('.item-sub-menu-apontamentos')
var itemSubMenuAuditoria = document.querySelector('.item-sub-menu-auditoria')
var itemSubMenuCompliance = document.querySelector('.item-sub-menu-compliance')

// seleciona os itens e subitens clicados

function selectLink(){
    itemLink.forEach((item)=>
        item.classList.remove('selectLink')
    )
    this.classList.add('selectLink');
}

itemLink.forEach ((item)=>
    item.addEventListener('click', selectLink)
)


function selectSubLink(){
    itemSubLink.forEach((itemSub)=>
        itemSub.classList.remove('selectSubLink')
    )
    this.classList.add('selectSubLink');
}

itemSubLink.forEach ((itemSub)=>
    itemSub.addEventListener('click', selectSubLink)
)

// Expande o menu

icnBurguer.addEventListener('click',toggleMenuLateral)

function toggleMenuLateral() {
    var larguraMenuLateral = Number(window.getComputedStyle(menuLateral).getPropertyValue('width').replace('px',''));
    if(larguraMenuLateral > 80){
        fecharMenuLateral();
    } else {
        abrirMenuLateral();
    }
}

function fecharMenuLateral(){
    menuLateral.classList.remove('expandir')
    logoDetails.classList.remove('expandir')
    logoGRC.classList.remove('expandir')
    txtLogo.classList.remove('expandir')
    icnBurguer.classList.remove('expandir')
    mainContent.classList.remove('expandir')
    itemSubMenuProcessos.style.display = 'none';
    itemSubMenuRiscos.style.display = 'none';
    itemSubMenuControles.style.display = 'none';
    itemSubMenuApontamentos.style.display = 'none';
    itemSubMenuAuditoria.style.display = 'none';
    itemSubMenuCompliance.style.display = 'none';
}

function abrirMenuLateral(){
    menuLateral.classList.add('expandir')
    logoDetails.classList.add('expandir')
    logoGRC.classList.add('expandir')
    txtLogo.classList.add('expandir')
    icnBurguer.classList.add('expandir')
    mainContent.classList.add('expandir')
}

// Minimiza o menu após 10 segundos

let timer;

function reiniciarTemporizador(){
    clearTimeout(timer);
    timer = setTimeout(fecharMenuLateral,10000);
}

menuLateral.addEventListener("mouseover", reiniciarTemporizador);
reiniciarTemporizador()


// Expande e minimiza os sublinks com click

itemMenuHome.addEventListener('click', function() {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'none';
});

itemMenuDashboard.addEventListener('click', function() {
    itemSubMenuProcessos.style.display = 'none';
    itemSubMenuRiscos.style.display = 'none';
    itemSubMenuControles.style.display = 'none';
    itemSubMenuApontamentos.style.display = 'none';
    itemSubMenuAuditoria.style.display = 'none';
    itemSubMenuCompliance.style.display = 'none';
});

itemMenuAprovacoes.addEventListener('click', function() {
    itemSubMenuProcessos.style.display = 'none';
    itemSubMenuRiscos.style.display = 'none';
    itemSubMenuControles.style.display = 'none';
    itemSubMenuApontamentos.style.display = 'none';
    itemSubMenuAuditoria.style.display = 'none';
    itemSubMenuCompliance.style.display = 'none';
});


itemMenuProcessos.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaRiscos.style.transform = 'rotate(0deg)';
    icnSetaControles.style.transform = 'rotate(0deg)';
    icnSetaApontamentos.style.transform = 'rotate(0deg)';
    icnSetaAuditoria.style.transform = 'rotate(0deg)';
    icnSetaCompliance.style.transform = 'rotate(0deg)';
    if (itemSubMenuProcessos.style.display === 'none' || itemSubMenuProcessos.style.display === '') {
        itemSubMenuProcessos.style.display = 'block';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'none';
        icnSetaProcessos.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuProcessos.style.display = 'none';
        icnSetaProcessos.style.transform = 'rotate(0deg)';
    }
});

itemMenuRiscos.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaProcessos.style.transform = 'rotate(0deg)';
    icnSetaControles.style.transform = 'rotate(0deg)';
    icnSetaApontamentos.style.transform = 'rotate(0deg)';
    icnSetaAuditoria.style.transform = 'rotate(0deg)';
    icnSetaCompliance.style.transform = 'rotate(0deg)';
    if (itemSubMenuRiscos.style.display === 'none' || itemSubMenuRiscos.style.display === '') {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'block';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'none';
        icnSetaRiscos.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuRiscos.style.display = 'none';
        icnSetaRiscos.style.transform = 'rotate(0deg)';
    }
});

itemMenuControles.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaProcessos.style.transform = 'rotate(0deg)';
    icnSetaRiscos.style.transform = 'rotate(0deg)';
    icnSetaApontamentos.style.transform = 'rotate(0deg)';
    icnSetaAuditoria.style.transform = 'rotate(0deg)';
    icnSetaCompliance.style.transform = 'rotate(0deg)';
    if (itemSubMenuControles.style.display === 'none' || itemSubMenuControles.style.display === '') {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'block';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'none';
        icnSetaControles.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuControles.style.display = 'none';
        icnSetaControles.style.transform = 'rotate(0deg)';
    }
});

itemMenuApontamentos.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaProcessos.style.transform = 'rotate(0deg)';
    icnSetaRiscos.style.transform = 'rotate(0deg)';
    icnSetaControles.style.transform = 'rotate(0deg)';
    icnSetaAuditoria.style.transform = 'rotate(0deg)';
    icnSetaCompliance.style.transform = 'rotate(0deg)';
    if (itemSubMenuApontamentos.style.display === 'none' || itemSubMenuApontamentos.style.display === '') {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'block';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'none';
        icnSetaApontamentos.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuApontamentos.style.display = 'none';
        icnSetaApontamentos.style.transform = 'rotate(0deg)';
    }
});

itemMenuAuditoria.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaProcessos.style.transform = 'rotate(0deg)';
    icnSetaRiscos.style.transform = 'rotate(0deg)';
    icnSetaControles.style.transform = 'rotate(0deg)';
    icnSetaApontamentos.style.transform = 'rotate(0deg)';
    icnSetaCompliance.style.transform = 'rotate(0deg)';
    if (itemSubMenuAuditoria.style.display === 'none' || itemSubMenuAuditoria.style.display === '') {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'block';
        itemSubMenuCompliance.style.display = 'none';
        icnSetaAuditoria.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuAuditoria.style.display = 'none';
        icnSetaAuditoria.style.transform = 'rotate(0deg)';
    }
});

itemMenuCompliance.addEventListener('click', function(event) {
    event.stopPropagation();
    icnSetaProcessos.style.transform = 'rotate(0deg)';
    icnSetaRiscos.style.transform = 'rotate(0deg)';
    icnSetaControles.style.transform = 'rotate(0deg)';
    icnSetaApontamentos.style.transform = 'rotate(0deg)';
    icnSetaAuditoria.style.transform = 'rotate(0deg)';
    if (itemSubMenuCompliance.style.display === 'none' || itemSubMenuCompliance.style.display === '') {
        itemSubMenuProcessos.style.display = 'none';
        itemSubMenuRiscos.style.display = 'none';
        itemSubMenuControles.style.display = 'none';
        itemSubMenuApontamentos.style.display = 'none';
        itemSubMenuAuditoria.style.display = 'none';
        itemSubMenuCompliance.style.display = 'block';
        icnSetaCompliance.style.transform = 'rotate(90deg)';
        selectSubLink();
    } else {
        itemSubMenuCompliance.style.display = 'none';
        icnSetaCompliance.style.transform = 'rotate(0deg)';
    }
});

// Ao clicar em um sublink expandindo, interrompe a ação de click para o "pai", impedindo que o pai feche
itemSubMenu.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});


// Ao clicar em um icone, expande menu lateral

itemMenu.forEach(function(element) {
    element.addEventListener('click', abrirMenuLateral)});


menuLateral.addEventListener('mouseout', function(){
    fecharMenuLateral;
});


// Função para carregar o conteúdo das páginas de forma dinâmica


// function carregarPagina(pagina) {
//     let scriptCarregado = false;
//     if (!scriptCarregado){
//     fetch(`${pagina}.html`)
//     .then(response => {
//         if (!response.ok) {
//           throw new Error('Erro ao carregar a página.');
//         }
//         return response.text();
//       })
//       .then(data => {
//         document.getElementById('conteudo').innerHTML = data;
//         const script = document.createElement('script');
//         script.src = `../javascript/${pagina}.js`;
//         script.async = true;
//         document.body.appendChild(script);
//         scriptCarregado = true;
//       })
//       .catch(error => {
//         console.error('Erro:', error);
//       });
//     } else {
//         location.reaload();
//     }
//   };                  


// Função auto-invocada para encapsular o código e manter o estado privado
(function() {
    let scriptCarregado = false;

    // Função para carregar a página
    window.carregarPagina = function(pagina) {
        if (!scriptCarregado){
            fetch(`${pagina}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erro ao carregar a página.');
                }
                return response.text();
            })
            .then(data => {
                document.getElementById('conteudo').innerHTML = data;
                const script = document.createElement('script');
                script.src = `../javascript/${pagina}.js`;
                script.async = true;
                document.body.appendChild(script);
                scriptCarregado = true;
            })
            .catch(error => {
                console.error('Erro:', error);
            });
        } else {
            location.reload();
        }
    };
})();
