import Title from '../title';
import PlanetCard from '../planetcard';
import planets from '../../data/planets';
import './style.css';

function SolarSystem() {
  return (
    <div data-testid="solar-system">
      <Title headline="Planetas" />
      <ul className="listadeplanetas">
        {
          planets.map(({ name, image }, indice) => (
            <li key={ indice }>
              <PlanetCard planetName={ name } planetImage={ image } />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default SolarSystem;
