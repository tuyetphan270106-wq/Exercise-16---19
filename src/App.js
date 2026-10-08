import animals from './animals';
import AnimalCard from './ex19/AnimalCard';

function App() {

  function showAdditional(additional) {
    const data = Object.entries(additional);

    const message = data
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');

    alert(message);
  }

  return (
    <div>
      <h1>Animals</h1>
      <div style={{ display: 'flex' }}>
        {animals.map(animal => (
          <AnimalCard
            key={animal.name}
            name={animal.name}
            scientificName={animal.scientificName}
            size={animal.size}
            diet={animal.diet}
            additional={animal.additional}
            showAdditional={showAdditional}
          />
        ))}
      </div>
    </div>
  );
}

export default App;