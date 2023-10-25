
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let setsPlayer1 = 0;
let setsPlayer2 = 0;

document.getElementById("player1Button").addEventListener("click", function() {
    addPoint(1);
});

document.getElementById("player2Button").addEventListener("click", function() {
    addPoint(2);
});

document.getElementById("player1SetButton").addEventListener("click", function() {
    addSet(1);
});

document.getElementById("player2SetButton").addEventListener("click", function() {
    addSet(2);
});

document.getElementById("player1RemovePointButton").addEventListener("click", function() {
    removePoint(1);
});

document.getElementById("player2RemovePointButton").addEventListener("click", function() {
    removePoint(2);
});

document.getElementById("player1RemoveSetButton").addEventListener("click", function() {
    removeSet(1);
});

document.getElementById("player2RemoveSetButton").addEventListener("click", function() {
    removeSet(2);
});

function addPoint(player) {
    if (player === 1) {
        scorePlayer1++;
    } else {
        scorePlayer2++;
    }

    updateScoreAndSets();
}

function addSet(player) {
    if (player === 1) {
        setsPlayer1++;
    } else {
        setsPlayer2++;
    }

    updateScoreAndSets();
}

function removePoint(player) {
    if (player === 1) {
        if (scorePlayer1 > 0) {
            scorePlayer1--;
        }
    } else {
        if (scorePlayer2 > 0) {
            scorePlayer2--;
        }
    }

    updateScoreAndSets();
}

function removeSet(player) {
    if (player === 1) {
        if (setsPlayer1 > 0) {
            setsPlayer1--;
        }
    } else {
        if (setsPlayer2 > 0) {
            setsPlayer2--;
        }
    }

    updateScoreAndSets();
}

function updateScoreAndSets() {
    if (scorePlayer1 >= 11 && scorePlayer1 - scorePlayer2 >= 2) {
        setsPlayer1++;
        scorePlayer1 = 0;
        scorePlayer2 = 0;
    } else if (scorePlayer2 >= 11 && scorePlayer2 - scorePlayer1 >= 2) {
        setsPlayer2++;
        scorePlayer1 = 0;
        scorePlayer2 = 0;
    }

    if (setsPlayer1 >= 5 || setsPlayer2 >= 5) {
        // O jogo terminou
        alert('Fim do jogo!');
        disableButtons();
    }

    document.getElementById("player1Score").textContent = scorePlayer1;
    document.getElementById("player2Score").textContent = scorePlayer2;
    document.getElementById("player1Sets").textContent = setsPlayer1;
    document.getElementById("player2Sets").textContent = setsPlayer2;
}

function disableButtons() {
    document.getElementById("player1Button").disabled = true;
    document.getElementById("player2Button").disabled = true;
    document.getElementById("player1SetButton").disabled = true;
    document.getElementById("player2SetButton").disabled = true;
}


function restartGame() {
    // Reiniciar os valores do placar
    scorePlayer1 = 0;
    scorePlayer2 = 0;
    setsPlayer1 = 0;
    setsPlayer2 = 0;

    // Atualizar a exibição
    document.getElementById("player1Score").textContent = scorePlayer1;
    document.getElementById("player2Score").textContent = scorePlayer2;
    document.getElementById("player1Sets").textContent = setsPlayer1;
    document.getElementById("player2Sets").textContent = setsPlayer2;

    // Habilitar os botões
    document.getElementById("player1Button").disabled = false;
    document.getElementById("player2Button").disabled = false;
    document.getElementById("player1SetButton").disabled = false;
    document.getElementById("player2SetButton").disabled = false;

    // Ocultar o botão de recomeçar
    document.getElementById("restartGameButton").style.display = "none";
}

// Configurar o evento de clique para o botão de recomeçar
document.getElementById("restartGameButton").addEventListener("click", function() {
    restartGame();
});

