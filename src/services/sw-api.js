
const url = 'https://swapi.dev/api/starships/9/'

export async function getPeople(){
    try {
        const response = await fetch(url);
        const data = await response.json();

        console.log(data);
        return data;
    } catch (error) {
        console.log(error)
    }
}