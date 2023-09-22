import { PlanetCardProps } from '../../type';
import './style.css';

function PlanetCard({ planetName, planetImage }: PlanetCardProps) {
  return (
    <div data-testid="planet-card">
      <p data-testid="planet-name">
        { planetName }
      </p>
      <img src={ planetImage } alt={ `Planeta ${planetName}` } />
    </div>
  );
}

export default PlanetCard;
