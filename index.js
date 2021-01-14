const api = 'https://reqres.in/api/users?page=1';
const tabelaResultados = document.querySelector('#tabela-resultados tbody');

// consultando api
fetch(api)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        exibeResultados(data);
    });


const exibeResultados = (resultados) => {
    let html = ``;

    resultados.data.forEach(item => {
        let linha = `<tr>`;
        
        linha += `<td>${item.id}</td>`;
        linha += `
        <td>
            <img src="${item.avatar}" width="60" />
        </td>`;
        linha += `<td>${item.email}</td>`
        linha += `<td>${item.first_name}</td>`
        linha += `<td>${item.last_name}</td>`

        linha += `</tr>`;

        html += linha;
    });

    tabelaResultados.innerHTML = html;
}