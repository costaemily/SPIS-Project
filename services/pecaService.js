import { TOKEN } from "../config/configDato"

async function alterarPeca(id, idString, idnome, idmarca, idmodelo, idcategoria, 
                            valorunitariocusto, valorunitariovenda, numeroserie,
                            quantidade, imagem, descricao) {
    try {
        const res = await fetch(
            `https://site-api.datocms.com/items/${id}`,
            {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    "data": {
                        "id": idString,
                        "type": "item",
                        "attributes": {
                            "idnome": idnome,
                            "idmodelo": [
                                idmodelo
                            ],
                            "idmarca": idmarca,
                            "numeroserie": numeroserie,
                            "imagem": imagem,
                            "descricao": descricao,
                            "quantidade": quantidade,
                            "valorunitariocusto": valorunitariocusto,
                            "valorunitariovenda": valorunitariovenda,
                            "idcategoria": idcategoria
                        },
                        "relationships": {
                            "item_type": {
                                "data": {
                                    "type": "item_type",
                                    "id": "904230"
                                }
                            }
                        }
                    }
                }),
            }
        )
        const data = await res.json()
        return data.data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function criarPeca(peca) {
    try {
        const res = await fetch(
            'https://site-api.datocms.com/items',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify(peca),
            }
        )
        const data = await res.json()
        return data.data.id
    } catch (error) {
        console.log(error);
        return error
    }
}

async function listaPecas() {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas {
                            id
                            numeroserie
                            }
                        }  
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharPecasPeloId(idNome) {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas(filter: {idnome: {eq: ${idNome}}}) {
                            id
                            idnome {
                                nome
                            }
                            idmodelo {
                                nome
                            }
                            idmarca {
                                nome
                            }
                            numeroserie
                            quantidade
                            descricao
                            valorunitariocusto
                            imagem {
                                url
                            }
                            }
                        }   
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharPecasPeloIdModelo(idModelo) {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas(filter: {idmodelo: {eq: ${idModelo}}}) {
                            id
                            idnome {
                                nome
                            }
                            idmodelo {
                                nome
                            }
                            idmarca {
                                nome
                            }
                            numeroserie
                            quantidade
                            descricao
                            valorunitariocusto
                            imagem {
                                url
                            }
                            }
                        }   
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharPecasPeloNumeroSerie(numeroSerie) {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas(filter: {numeroserie: {matches: {pattern: ${numeroSerie}}}}) {
                            id
                            idnome {
                                nome
                            }
                            idmodelo {
                                nome
                            }
                            idmarca {
                                nome
                            }
                            numeroserie
                            quantidade
                            valorunitariocusto
                            imagem {
                                url
                            }
                            }
                        }
                        
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function listaQuantidadePecas() {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas {
                            quantidade
                            }
                        }  
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharQuantidadePecaPeloId(id) {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            peca(filter: {id: {eq: "${id}"}}) {
                            quantidade
                            }
                        }
                        `
                }),
            }
        )
        const data = await res.json()
        console.log(data.data.peca)
        return data.data.peca
    } catch (error) {
        console.log(error);
        return error
    }
}

async function deletarPeca(id) {
    try {
        const res = await fetch(
            `https://site-api.datocms.com/items/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                }
            }
        )
        const data = await res.json()
        console.log(data.data)
        return data.data.peca
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharPecaPeloId(id) {
    try {
        const res = await fetch(
            `https://site-api.datocms.com/items/${id}`,
            {
                method: 'GET',
                headers: {
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                }
            }
        )
        const data = await res.json()
        return data.data
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharIdPecaPeloNumeroSerie(numeroSerie) {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({
                    query: `
                        query {
                            allPecas(filter: {numeroserie: {matches: {pattern: ${numeroSerie}}}}) {
                            id
                            }
                        }
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allPecas
    } catch (error) {
        console.log(error);
        return error
    }
}

export { criarPeca, listaPecas, acharPecasPeloId, listaQuantidadePecas, acharPecaPeloId,
        deletarPeca, acharQuantidadePecaPeloId, acharPecasPeloIdModelo, acharIdPecaPeloNumeroSerie,
        acharPecasPeloNumeroSerie, alterarPeca }