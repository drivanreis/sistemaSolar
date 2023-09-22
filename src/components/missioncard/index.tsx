import { PropsMission } from '../../type';
import './style.css';

function MissionCard({ name, year, country, destination }: PropsMission) {
  return (
    <div data-testid="mission-card">
      <p data-testid="mission-name"><strong>{ name }</strong></p>
      <div className="data-wrapper">
        <p data-testid="mission-year">{ year }</p>
        <p data-testid="mission-country">{ country }</p>
        <p data-testid="mission-destination">{ destination }</p>
      </div>
    </div>
  );
}

export default MissionCard;
