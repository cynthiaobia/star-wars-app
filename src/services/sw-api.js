
const url = 'https://swapi.dev/api/starships/'

export async function getStarShips(){
    try {
        const response = await fetch(url);
        const data = await response.json();
        // get just the array of results
        const starShipsArr = data.results;
        return starShipsArr;
    } catch (error) {
        console.log(error)
    }
}