import { TOKEN } from "../config/configDato"

async function criarEntrada(entrada) {
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
                body: JSON.stringify(entrada),
            }
        )
        const data = await res.json()
        return data.data.id
    } catch (error) {
        console.log(error);
        return error
    }
}

async function alterarEntrada(id, entrada) {
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
                body: JSON.stringify(entrada),
            }
        )
        const data = await res.json()
        return data.data
    } catch (error) {
        console.log(error);
        return error
    }
}

export { criarEntrada, alterarEntrada }