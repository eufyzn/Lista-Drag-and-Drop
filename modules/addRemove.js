function addItem() {
    const novoBotao = createRemoveButton();
    const novoItem = createNewItem();

    const novoContainer = buildNewItemContainer({ item: novoItem, botao: novoBotao });

    const lista = document.getElementById("lista");
    lista.appendChild(novoContainer);
}