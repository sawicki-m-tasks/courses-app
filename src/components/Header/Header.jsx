import Button from '../../common/Button/Button';
import { buttonText } from '../../constants';
import Logo from './components/Logo/Logo';

import './Header.css';

export default function Header() {

  return (
    <header>
      <div className="logo">
        <Logo/>
      </div>
      <div className="accountDetails">
        <span>Dave</span>
        <Button buttonText={buttonText.logout} disabled={true}/>
      </div>
    </header>
  );
}