let cadastroList = [];


function cadastrar() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('fone');

    if (nome.value.trim() === '') {
        alert('Informe seu nome');
    } else if (email.value.trim() === '') {
        alert('Informe seu e-mail');
    }else if (!validarEmail(email.value)) {
        alert('O email informado não é válido. Por favor, insira um email válido.');
    } else if (telefone.value.trim() === '') {
        alert('Informe seu telefone');
    } else {
        if (verificarEmailRepetido(email.value)) {
            alert('O email já está cadastrado. Por favor, insira um email diferente.');
        } else {
            const dataAtual = new Date();
            const dataCadastro = dataAtual.toLocaleDateString() + ' ' + dataAtual.toLocaleTimeString();

            const newCadastro = { nome: nome.value, email: email.value, telefone: telefone.value, dataCadastro: dataCadastro };
            addCadastro(newCadastro);

            limpaCampos();
            renderCadastroList();

            alert('Seu cadastro foi criado');
        }
    }
}
function validarEmail(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    
    return regex.test(email);
}

function verificarEmailRepetido(email) {
    return cadastroList.some(cadastro => cadastro.email === email);
}

function limpaCampos() {
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('fone');
    const mensagem = document.getElementById('mensagem');

    nome.value ='';
    email.value ='';
    telefone.value = '';
    mensagem.value ='';
}

function addCadastro(cadastro) {
    cadastroList.push(cadastro);
    localStorage.setItem('cadastroList', JSON.stringify(cadastroList));
}

function deleteCadastro(cadastroId) {
    const updatedCadastroList = cadastroList.filter(cadastro => cadastro.id !== cadastroId);

    if (updatedCadastroList.length < cadastroList.length) {
        cadastroList = updatedCadastroList;

        localStorage.setItem('cadastroList', JSON.stringify(cadastroList));
        renderCadastroList();
    }
}

function getCadastroList() {
    const storedList = JSON.parse(localStorage.getItem('cadastroList'));
    cadastroList = storedList || [];
}

function renderCadastroList() {
    const cadastroListElement = document.getElementById('listaCadastro');
    cadastroListElement.innerHTML = '';

    cadastroList.forEach(cadastro => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<span class="cadastro-name">${cadastro.nome}</span> Email: ${cadastro.email}, Telefone: ${cadastro.telefone}, Data de Criação: ${cadastro.dataCadastro} <button class="delete-button" onclick="deleteCadastro(${cadastro.id})">Excluir</button>`;
        cadastroListElement.appendChild(listItem);
    });
}

getCadastroList();
renderCadastroList();

function limparLocalStorage() {
    if (confirm("DESEJA DELETAR TODA A LISTA?")) {
        localStorage.clear();
        cadastroList = [];
        renderCadastroList();
    }
}

function pesquisarCadastro() {
    const inputPesquisa = document.getElementById('pesquisaInput');
    const termoPesquisa = inputPesquisa.value.toLowerCase();

    let contadorCadastros = 0;

    const resultados = cadastroList.filter(cadastro => {
        if (cadastro.nome.toLowerCase().includes(termoPesquisa)) {
            contadorCadastros++; 
            return true; 
        }
        return false;
    });

    if (resultados.length > 0) {
        const cadastroListElement = document.getElementById('listaCadastro');
        cadastroListElement.innerHTML = '';
        alert('Cadastros encontrados com o termo: ' + contadorCadastros);

        resultados.forEach(cadastro => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<span class="cadastro-name">${cadastro.nome}</span> Email: ${cadastro.email}, Telefone: ${cadastro.telefone}, Data de Criação: ${cadastro.dataCadastro} <button class="delete-button" onclick="deleteCadastro(${cadastro.id})">Excluir</button>`;
            cadastroListElement.appendChild(listItem);
        });
    } else {
        alert('Nenhum cadastro encontrado para o nome pesquisado.');
    }

    inputPesquisa.value = '';
}


