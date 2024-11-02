const URL_FACTS = 'https://catfact.ninja/fact'

export const getRandomFact = () => {
    return fetch(URL_FACTS)
    .then(respone => respone.json())
    .then(data => {
        const {fact} = data
        return fact
    })
}