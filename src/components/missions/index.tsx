import MissionCard from '../missioncard';
import Title from '../title';
import missions from '../../data/missions';
import './style.css';

function Missions() {
  return (
    <div data-testid="missions">
      <Title headline="Missões" />
      <ul className="listadeplanetas">
        {
          missions.map((mission, indice) => (
            <li key={ indice }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Missions;
