// Objeto para armazenar o número de pesquisas por linguagem
let contadorLinguagens = {
    javascript: 0,
    python: 0,
    java: 0,
    'c#': 0,
    html: 0,
    css: 0,
    kotlin: 0,
    r: 0,
    'c++': 0,
    assembly: 0,
    c: 0,
    php: 0,
    go: 0,
    swift: 0,
    typescript: 0,
    ruby: 0,
    scala: 0,
    dart: 0,
    rust: 0,
    perl: 0
};

// Função que retorna a linguagem com mais pesquisas
function linguagemMaisPesquisada() {
    let maiorPesquisa = null;
    let maiorValor = 0;

    // Percorre o objeto e identifica a linguagem com mais pesquisas
    for (let linguagem in contadorLinguagens) {
        if (contadorLinguagens[linguagem] > maiorValor) {
            maiorValor = contadorLinguagens[linguagem];
            maiorPesquisa = linguagem;
        }
    }

    return maiorPesquisa;
}

// Função de pesquisa
function pesquisar() {
    let input = document.getElementById("pesquisa").value.toLowerCase();
    let section = document.getElementById("resultados-pesquisa");
    let resultados = "";
    let adBanner = document.querySelector('.ad-banner'); // Seleciona o banner de propaganda

    for (let linguagem of linguagens) {
        let titulo = linguagem.titulo.toLowerCase();
        let descricao = linguagem.descricao.toLowerCase();

        if (titulo.includes(input) || descricao.includes(input)) {
            resultados += `
            <div class="item-resultado">
                <img src="img/${linguagem.imagem}">
                <div class="texto-resultado"><h2>${linguagem.titulo}</h2>
                <p class="descricao-meta">${linguagem.descricao}</p>
                <p class="descricao-meta"><br> Exemplo de Código:</p><code>${linguagem.exemplo}</code>
                <p class="descricao-meta"><br># Paradigma: ${linguagem.paradigma}</p>
                <p class="descricao-meta"># Criação: ${linguagem.criadoEm}</p>
                <p class="descricao-meta">${linguagem.curiosidade}</p>
                <a href="${linguagem.link}" target="_blank">Link para Documentação ${linguagem.titulo}</a>
            </div>
            `;

            // Incrementa o contador da linguagem pesquisada
            if (contadorLinguagens[titulo] !== undefined) {
                contadorLinguagens[titulo]++;
            }
        }

        if (!input) {
            resultados = `
                <div class="item-resultado">
                    <div class="texto-resultado"><h2>Você não inseriu nenhuma informação.</h2>
                </div>
            `;
        }

        if (!resultados) {
            resultados = `
                <div class="item-resultado">
                    <div class="texto-resultado"><h2>Linguagem não encontrada!</h2>
                </div>
            `;
        }
    }

    // Exibe a linguagem com mais pesquisas
    const linguagemComMaisPesquisas = linguagemMaisPesquisada();
    switch (linguagemComMaisPesquisas) {
        case 'javascript':
            adBanner.innerHTML = `
                <img src="img/javascript.png" alt="Propaganda JavaScript" class="ad-image">
                    <p>Aprenda JavaScript com Google X Alura por 50% Off</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'python':
            adBanner.innerHTML = `
                <img src="img/python.png" alt="Propaganda Python" class="ad-image">
                    <p>Aprenda Python com Google X Alura por 50% Off</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'java':
            adBanner.innerHTML = `
                <img src="img/java.png" alt="Propaganda Java" class="ad-image">
                    <p>Aprenda Java com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c#':
            adBanner.innerHTML = `
                <img src="img/csharp.png" alt="Propaganda C#" class="ad-image">
                    <p>Aprenda C# com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'html':
            adBanner.innerHTML = `
                <img src="img/html.png" alt="Propaganda HTML" class="ad-image">
                    <p>Aprenda HTML com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'css':
            adBanner.innerHTML = `
                <img src="img/css.png" alt="Propaganda CSS" class="ad-image">
                    <p>Aprenda CSS com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'kotlin':
            adBanner.innerHTML = `
                <img src="img/kotlin.png" alt="Propaganda Kotlin" class="ad-image">
                    <p>Aprenda Kotlin com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'r':
            adBanner.innerHTML = `
                <img src="img/r.png" alt="Propaganda R" class="ad-image">
                    <p>Aprenda R com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c++':
            adBanner.innerHTML = `
                <img src="img/c++.png" alt="Propaganda C++" class="ad-image">
                    <p>Aprenda C++ com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'assembly':
            adBanner.innerHTML = `
                <img src="img/assembly.png" alt="Propaganda Assembly" class="ad-image">
                    <p>Aprenda Assembly com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'c':
            adBanner.innerHTML = `
                <img src="img/c.png" alt="Propaganda C" class="ad-image">
                    <p>Aprenda C com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'php':
            adBanner.innerHTML = `
                <img src="img/php.png" alt="Propaganda PHP" class="ad-image">
                    <p>Aprenda PHP com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'go':
            adBanner.innerHTML = `
                <img src="img/go.png" alt="Propaganda Go" class="ad-image">
                    <p>Aprenda Go com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'swift':
            adBanner.innerHTML = `
                <img src="img/swift.png" alt="Propaganda Swift" class="ad-image">
                    <p>Aprenda Swift com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'typescript':
            adBanner.innerHTML = `
                <img src="img/typescript.png" alt="Propaganda TypeScript" class="ad-image">
                    <p>Aprenda TypeScript com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'ruby':
            adBanner.innerHTML = `
                <img src="img/ruby.png" alt="Propaganda Ruby" class="ad-image">
                    <p>Aprenda Ruby com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'scala':
            adBanner.innerHTML = `
                <img src="img/scala.png" alt="Propaganda Scala" class="ad-image">
                    <p>Aprenda Scala com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'dart':
            adBanner.innerHTML = `
                <img src="img/dart.png" alt="Propaganda Dart" class="ad-image">
                    <p>Aprenda Dart com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'rust':
            adBanner.innerHTML = `
                <img src="img/rust.png" alt="Propaganda Rust" class="ad-image">
                    <p>Aprenda Rust com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        case 'perl':
            adBanner.innerHTML = `
                <img src="img/perl.png" alt="Propaganda Perl" class="ad-image">
                    <p>Aprenda Perl com nossa parceria especial!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
        default:
            adBanner.innerHTML = `
                <img src="img/geral.png" alt="Propaganda Geral" class="ad-image">
                    <p>Confira nossas promoções e ferramentas para desenvolvedores!</p>
                    <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
            `;
            break;
    }

    section.innerHTML = resultados;
}

function configurarBannerPadrao() {
    let adBanner = document.querySelector('.ad-banner');
    adBanner.innerHTML = `
        <img src="img/geral.png" alt="Propaganda Geral" class="ad-image">
        <p>Confira nossas promoções e ferramentas para desenvolvedores!</p>
        <a href="https://www.alura.com.br/" target="_blank">Site Alura</a>
    `;
}

window.onload = function () {
    configurarBannerPadrao();
};

// Adiciona o evento de tecla "Enter" para realizar a pesquisa
document.querySelector('input').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        pesquisar(); // Chama a função pesquisar
    }
});
