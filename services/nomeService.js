import { TOKEN } from "../config/configDato"

async function criarNome(nome) {
    try {
        const res = await fetch(
            'https://site-api.datocms.com/items',
            {
                method: 'POST',
                headers: {
                    'X-Api-Version': 3,
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${TOKEN}`,
                },
                body: JSON.stringify({nome}),
            }
        )
        const data = await res.json()
        return data.data.id
    } catch (error) {
        console.log(error);
        return error
    }
}

async function listaNomes() {
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
                            allNomes {
                            id
                            nome
                            }
                        }        
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allNomes
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharIdNomePeloTitulo(nome) {
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
                            nome(filter: {nome: {matches: {pattern: ${nome}}}}) {
                                id
                            }
                        }      
                        `
                }),
            }
        )
        const data = await res.json()
        //console.log(data)
        return data.data.nome
    } catch (error) {
        console.log(error);
        return error
    }
}

export { criarNome, listaNomes, acharIdNomePeloTitulo }