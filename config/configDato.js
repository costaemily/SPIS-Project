const TOKEN = '618e882b15bf1ad0599491251a20e0';

async function FetchAllEntradas() {
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                        query{
                            allEntradas {
                                id
                                dataentrada
                                quantidade
                                idpeca {
                                  id
                                }
                                idtipoentrada {
                                  nome
                                }
                              }
                        }            
                        `
                }),
            }
        )
        const data = await res.json()
        return data.data.allEntradas
    } catch (error) {
        console.log(error);
        return error
    }
}

async function FetchAllTipoSaidas() {
    console.log("hora de buscar tipos saida")
    try {
        const res = await fetch(
            'https://graphql.datocms.com/',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({
                    query: `
                        query{
                            allTiposaidas {
                                id
                                nome
                            }         
                        `
                }),
            }
        )
        const data = await res.json()
        console.log(data)
        return data.data.allTipoSaidas
    } catch (error) {
        console.log(error);
        return error
    }
}
export { TOKEN, FetchAllEntradas, FetchAllTipoSaidas }