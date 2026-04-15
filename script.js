let rodadaAtual = 1;
let anoSelecionado = null;

const listaOficial = {
    2020: ["Sport", "Grêmio", "Atlético-MG", "Vasco", "Bahia", "Atlético-GO", "Fortaleza", "Santos", "Internacional", "Flamengo", "Bragantino", "Coritiba", "Palmeiras", "Athletico-PR", "Corinthians", "Fluminense", "Coritiba", "Coritiba", "Botafogo", "Sport", "Grêmio", "Atlético-MG", "Vasco", "Bahia", "Atlético-GO", "Fortaleza", "Santos", "Internacional", "Flamengo", "Bragantino", "Goiás", "Palmeiras", "Athletico-PR", "Corinthians", "São Paulo", "Fluminense", "Coritiba", "Botafogo"],
    2021: ["Grêmio", "Santos", "Chapecoense", "Bahia", "Internacional", "Atlético-MG", "São Paulo", "Bragantino", "Juventude", "Fluminense", "Cuiabá", "Athletico-PR", "Sport", "Fortaleza", "Atlético-GO", "Corinthians", "Flamengo", "América-MG", "Palmeiras", "Grêmio", "Santos", "Chapecoense", "Bahia", "Internacional", "Atlético-MG", "São Paulo", "Bragantino", "Juventude", "Fluminense", "Cuiabá", "Athletico-PR", "Sport", "Fortaleza", "Atlético-GO", "Corinthians", "Flamengo", "América-MG", "Palmeiras"],
    2022: ["Palmeiras", "Botafogo", "Bragantino", "Flamengo", "Athletico-PR", "Flamengo", "Santos", "São Paulo", "Coritiba", "América-MG", "Goiás", "Atlético-MG", "Cuiabá", "Atlético-GO", "Internacional", "Fluminense", "Corinthians", "Avaí", "Juventude", "Palmeiras", "Botafogo", "Fortaleza", "Bragantino", "Athletico-PR", "Flamengo", "Santos", "São Paulo", "Coritiba", "América-MG", "Goiás", "Atlético-MG", "Cuiabá", "Atlético-GO", "Internacional", "Fluminense", "Corinthians", "Avaí", "Juventude"],
    2023: ["Ituano", "Guarani", "ABC", "Ponte Preta", "Vitória", "Tombense", "Criciúma", "Londrina", "Novorizontino", "Chapecoense", "CRB", "Atlético-GO", "Avaí", "Sampaio Corrêa", "Juventude", "Sport", "Mirassol", "Botafogo-SP", "Vila Nova"],
    2024: ["Goiás", "Mirassol", "CRB", "Novorizontino", "Amazonas", "Operário", "Chapecoense", "Coritiba", "Vila Nova", "Brusque", "Sport", "Ponte Preta", "Ituano", "Santos", "Paysandu", "Avaí", "Botafogo-SP", "América-MG", "Guarani", "Goiás", "Mirassol", "CRB", "Novorizontino", "Amazonas", "Operário", "Chapecoense", "Coritiba", "Vila Nova", "Brusque", "Sport", "Ponte Preta", "Ituano", "Santos", "Paysandu", "Avaí", "Botafogo-SP", "América-MG", "Guarani"],
    2025: ["Bragantino", "Grêmio", "Juventude", "Vasco", "Bahia", "São Paulo", "Vitória", "Santos", "Sport", "Botafogo", "Atlético-MG", "Fluminense", "Fortaleza", "Corinthians", "Internacional", "Mirassol", "Cruzeiro", "Flamengo", "Palmeiras", "Bragantino", "Grêmio", "Juventude", "Vasco", "Bahia", "São Paulo", "Vitória", "Santos", "Sport", "Botafogo", "Atlético-MG", "Fluminense", "Fortaleza", "Corinthians", "Internacional", "Mirassol", "Cruzeiro", "Flamengo", "Palmeiras"],
    2026: ["São Bernardo", "Ponte Preta", "Cuiabá", "Náutico"]
};

function buscarJogos(ano) {
    anoSelecionado = ano;
    rodadaAtual = 1;
    const container = document.getElementById('container-jogos');
    container.innerHTML = "";
    document.getElementById('controles-carregar').style.display = "block";
    carregarBloco();
}

function carregarBloco() {
    const container = document.getElementById('container-jogos');
    const listaAno = listaOficial[anoSelecionado] || [];
    
    // Carrega 8 por vez
    const fimDoBloco = Math.min(rodadaAtual + 7, listaAno.length);

    for (let i = rodadaAtual; i <= fimDoBloco; i++) {
        const adversario = listaAno[i - 1];
        
        // AQUI ESTÁ A MUDANÇA: Incluímos o adversário na busca para ser certeiro
        const linkBusca = `https://www.youtube.com/results?search_query=Melhores+Momentos+Ceara+x+${adversario.replace(/ /g, "+")}+Rodada+${i}+${anoSelecionado}+GE`;
        
        renderizarCard(i, adversario, linkBusca);
    }

    rodadaAtual = fimDoBloco + 1;

    if (rodadaAtual > listaAno.length) {
        document.getElementById('controles-carregar').style.display = "none";
    }
}

function renderizarCard(r, adversario, link) {
    const container = document.getElementById('container-jogos');
    const card = document.createElement('a');
    card.href = link;
    card.target = "_blank";
    card.className = 'card link-card';
    card.innerHTML = `
        <div class="rodada-tag">RODADA ${r}</div>
        <div class="capa-substituta">
            <img src="ceara-sc-logo-2022.svg" alt="Ceará SC">
            <div class="play-btn">Assistir Gols</div>
        </div>
        <div class="info">
            <h3>Ceará x ${adversario}</h3>
            <p>Clique para ver o vídeo oficial</p>
        </div>
    `;
    container.appendChild(card);
}
