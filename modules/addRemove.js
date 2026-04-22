function addItem() {
    const novoBotao = createRemoveButton();
    const novoItem = createNewItem();

    const novoContainer = buildNewItemContainer({ item: novoItem, botao: novoBotao });

    const lista = document.getElementById("lista");
    lista.appendChild(novoContainer);
}

function createRemoveButton() {
    const novoBotao = document.createElement('button');
    novoBotao.className = 'remover';
    novoBotao.innerText = 'Remover';
    novoBotao.addEventListener('click', removerItem);

    return novoBotao;
}