import './App.css';

import { getPeople } from './services/sw-api';

import StarShips from './components/StarShips';

getPeople();



function App() {
  return (
    <div className="App">
      <StarShips />
    </div>
  );
}

export default App;
