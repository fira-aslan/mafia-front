import classes from "./MainNavigation.module.css";
import { Link } from 'react-router-dom';

function MainNavigation() {
  return (
    
    <header>
      <nav>
        <ul>
          <li className={classes.rules}>
            <Link to="/rules">Rules</Link>
          </li>
          <li className={classes.logo}>
          <Link to="">The Mafia</Link>
          </li>
          <li className={classes.language}>
            <Link to="/language">Language</Link>
          </li>
        </ul>
        
      </nav>
    </header>
  );
}

export default MainNavigation;
