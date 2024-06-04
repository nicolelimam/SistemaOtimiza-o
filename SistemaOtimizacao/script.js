document.addEventListener("DOMContentLoaded", () => {
    const formPedido = document.getElementById('formPedido');
    const btnAdicionarItem = document.getElementById('btnAdicionarItem');
    const btnSalvarPedido = document.getElementById('btnSalvarPedido');
    const btnGerarProducao = document.getElementById('btnGerarProducao');
    const btnNovoPedido = document.getElementById('btnNovoPedido');
    const btnFecharPopupSalvar = document.getElementById('btnFecharPopupSalvar');
    const tabelaItensPedido = document.querySelector('.tabela-itens-pedido tbody');
    const tabelaGerarProducao = document.querySelector('.tabela-gerar-producao');

    const containerNovoPedido = document.querySelector('.container-novo-pedido');
    const containerGerarProducao = document.querySelector('.container-gerar-producao');
    const popupSalvarContainer = document.querySelector('.popup-salvar-container');

    const toggleContainers = (container) => {
        containerNovoPedido.classList.remove('active');
        containerGerarProducao.classList.remove('active');
        container.classList.add('active');
    };

    let itensCorrentes = [];
    let currentPedidoId = 1;

    const renderTabela = () => {
        tabelaItensPedido.innerHTML = '';
        itensCorrentes.forEach((item) => {
            const row = document.createElement('tr');
            const tamanhoCell = document.createElement('td');
            const quantidadeCell = document.createElement('td');
            
            tamanhoCell.textContent = item.tamanho;
            quantidadeCell.textContent = item.quantidade;

            row.appendChild(tamanhoCell);
            row.appendChild(quantidadeCell);
            tabelaItensPedido.appendChild(row);
        });
    };

    const adicionarItem = () => {
        const campoTamanho = document.getElementById('campoTamanho');
        const campoQuantidade = document.getElementById('campoQuantidade');

        const tamanho = parseFloat(campoTamanho.value);
        const quantidade = parseInt(campoQuantidade.value);


        const novoItem = { tamanho, quantidade };
        itensCorrentes.push(novoItem);
        renderTabela();

        campoTamanho.value = '';
        campoQuantidade.value = '';
    };

    const salvarPedido = () => {
        itensCorrentes = [];
        renderTabela();
        popupSalvarContainer.classList.add('active'); // Mostra o popup
    };

    const fecharPopup = () => {
        popupSalvarContainer.classList.remove('active'); // Esconde o popup
    };

    const gerarProducao = () => {
        toggleContainers(containerGerarProducao);
    };

    const novoPedido = () => {
        toggleContainers(containerNovoPedido);
    };

    btnAdicionarItem.addEventListener('click', adicionarItem);
    btnSalvarPedido.addEventListener('click', (event) => {
        event.preventDefault();
        salvarPedido();
    });
    btnFecharPopupSalvar.addEventListener('click', fecharPopup);
    btnGerarProducao.addEventListener('click', gerarProducao);
    btnNovoPedido.addEventListener('click', novoPedido);

    // Inicializa o número do pedido
    numeroPedido.textContent = `Pedido Nº ${String(currentPedidoId).padStart(2, '0')}`;

    // Renderiza a tabela com dados existentes ao carregar a página (caso necessário)
    renderTabela();

    // Alterna para a tela de novo pedido ao carregar a página
    containerNovoPedido.classList.add('active');
});
