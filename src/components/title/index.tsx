import { PropsTitle } from '../../type';
import './style.css';

function Title({ headline }: PropsTitle) {
  return (<h2>{ headline }</h2>);
}

export default Title;
