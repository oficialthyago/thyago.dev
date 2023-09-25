function pesquisar() {
    const query = document.getElementById('query').value;
    const url = `http://localhost:8080/api/v2/projetos/buscar?query=${query}`;

    fetch(url)
        .then(response => response.json())
        .then(projetos => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '';
            projetos.forEach(projeto => {
                const item = document.createElement('li');
                item.textContent = projeto.nome; // Acesso ao campo "nome" do objeto ProjetoModel
                resultado.appendChild(item);
            });
        })
        .catch(error => console.error('Erro na requisição:', error));
}
