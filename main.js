function verificarResposta(event) {
    if (event.key === 'Enter') {
        var respostaUsuario = document.getElementById('resposta').value;
    var respostaCorreta = 'UNIVASF';
    
    if (respostaUsuario === respostaCorreta) {
        window.location.replace("arquivos-do-jogo/fase2.html");
        var fase1 = parseInt(sessionStorage.getItem('pp'));
        fase1 += 5;
        sessionStorage.setItem('pp', fase1)
    } else {
        window.alert('Resposta incorreta. Tente novamente.');
    };
};
};

function verificarResposta2(event) {
    if (event.key === 'Enter') {
        var respostaUsuario = document.getElementById('resposta').value;
        var respostaCorreta = '519662186421848842';
        
        if (respostaUsuario === respostaCorreta) {
            window.location.replace("fase3.html");
            var fase2 = parseInt(sessionStorage.getItem('pp'));
            fase2 += 20;
            sessionStorage.setItem('pp', fase2);
        } else {
            window.alert('Resposta incorreta. Tente novamente.');
        };
    };
};

function verificarResposta3(event) {
    if (event.key === 'Enter') {
        var respostaUsuario = document.getElementById('resposta').value;
        var respostaCorreta = ['Valdigleis', 'valdigleis'];
        
        if (respostaCorreta.includes(respostaUsuario)) {
            window.location.replace("agradecimentos.html");
            var fase3 = parseInt(sessionStorage.getItem('pp'));
            fase3 += 30;
            sessionStorage.setItem('pp', fase3);
        } else {
            window.alert('Resposta incorreta. Tente novamente.');
        };
    };
};

if(sessionStorage.getItem('pp') === null) {
    sessionStorage.setItem('pp', 0)
};

function pontos() {
    var elemento = document.getElementById("pontuacao");
    elemento.innerHTML = "PONTOS <br><br>" + sessionStorage.getItem('pp');
};

function start() {
    window.alert('Bem vindo! Este ENIGMA é composto por 3 fases, cada uma valendo 10, 20 e 30 pontos respectivamente. As dicas podem ser consultadas clicando ao botão no canto superior direito, mas elas fazem sua fase valer menos pontos. Errar a resposta tira 2 pontos do seu score. Termine com o máximo de pontos disponivel e boa sorte!');
};





