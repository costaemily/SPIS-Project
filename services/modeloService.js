import { TOKEN } from "../config/configDato"

async function listaModelos() {
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
                            allModelos {
                            id
                            nome
                            }
                        }       
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allModelos
    } catch (error) {
        console.log(error);
        return error
    }
}

async function acharIdModeloPeloTitulo(modelo) {
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
                            modelo(filter: {nome: {matches: {pattern: ${modelo}}}}) {
                            id
                            }
                        }    
                        `
                }),
            }
        )
        const data = await res.json()
        console.log(data.data.modelo)
        return data.data.modelo
    } catch (error) {
        console.log(error);
        return error
    }
}

export { listaModelos, acharIdModeloPeloTitulo }