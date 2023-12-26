function pesquisar() {
    const query = document.getElementById('query').value;
    const url = `http://localhost:8080/api/v2/projetos/buscar?query=${encodeURIComponent(query)}`;




    fetch(url)
        .then(response => response.json())
        .then(projetos => {
            const resultado = document.getElementById('resultado');
            resultado.innerHTML = '';
            const projetosFiltrados = projetos.filter(projeto => projeto.nome.toLowerCase().includes(query.toLowerCase()));
            projetosFiltrados.forEach(projeto => {
                const item = document.createElement('li');
                item.textContent = projeto.nome;
                resultado.appendChild(item);
            });

        })
        .catch(error => console.error('Erro na requisição:', error));
}
