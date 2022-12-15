import { TOKEN } from "../config/configDato"

async function listaTipoSaidas() {
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
                            allTiposaidas {
                            id
                            nome
                            }
                        }    
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allTiposaidas
    } catch (error) {
        console.log(error);
        return error
    }
}

export { listaTipoSaidas }