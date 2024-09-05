function pesquisar() {
    let input = document.getElementById("pesquisa").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    for (let linguagem of linguagens) {
        if (linguagem.titulo.toLowerCase().includes(input)) {
            resultados += `
        <div class="item-resultado">
            <img src="img/${linguagem.imagem}">
            <div class="texto-resultado"><h2>${linguagem.titulo}</h2>
            <p class="descrocao-meta">${linguagem.descricao}</p>
            <p class="descricao-meta"><br> Exemplo de Código:</p><code>${linguagem.exemplo}</code>
            <p class="descricao-meta"><br># Paradigma: ${linguagem.paradigma}</p>
            <p class="descricao-meta"># Criação: ${linguagem.criadoEm}</p>
            <p class="descricao-meta">${linguagem.curiosidade}</p>
            <a href="${linguagem.link}" target="_blank">Link para Documentação ${linguagem.titulo}</a>
        </div>
    `
        }

        section.innerHTML = resultados
    }

    if (resultados === "") {
        resultados = "<p>Nenhuma linguagem encontrada.</p>";
    }

    section.innerHTML = resultados;
}

document.querySelector('input').addEventListener('keydown', function (event) {
    // Verifica se a tecla pressionada foi "Enter"
    if (event.key === 'Enter') {
        pesquisar(); // Chama a função pesquisar
    }
});
