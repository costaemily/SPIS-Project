import { TOKEN } from "../config/configDato"

async function listaMarcas() {
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
                        query MyQuery {
                            allMarcas {
                            id
                            nome
                            }
                        }     
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allMarcas
    } catch (error) {
        console.log(error);
        return error
    }
}

export { listaMarcas }