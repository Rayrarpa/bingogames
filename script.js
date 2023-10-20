function saveCheckboxState(checkboxId, state) {
    const checkboxStates = JSON.parse(localStorage.getItem('games')) || {};
    checkboxStates[checkboxId] = state;
    localStorage.setItem('games', JSON.stringify(checkboxStates));
}

// Função para carregar o estado do checkbox do localStorage
function loadCheckboxState(checkboxId) {
    const checkboxStates = JSON.parse(localStorage.getItem('games')) || {};
    return checkboxStates[checkboxId] || false;
}

// Carrega o estado inicial dos checkboxes
for (let i = 1; i <= 108; i++) {
    const checkbox = document.getElementById(`${i}`);
    checkbox.checked = loadCheckboxState(`${i}`);

    checkbox.addEventListener('change', function () {
        // Salva o estado atual do checkbox no localStorage quando ocorre uma mudança
        saveCheckboxState(`${i}`, checkbox.checked);
    });
}