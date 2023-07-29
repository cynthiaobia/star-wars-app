
import {getStarShips} from '../services/sw-api';

const starShips = await getStarShips();
console.log(starShips);

function StarShipsCardInfo() {
    return (
        <div>
            <ul>
                <li>I'm a star ship</li>
            </ul>
        </div>
    )
}

// now work on mapping data

export default StarShipsCardInfo;