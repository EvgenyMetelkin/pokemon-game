import cn from 'classnames';
import {Link} from 'react-router-dom';

import s from  './style.module.css';

const MENU = [
  {
    title: "HOME",
    to: "home",
  },
  {
    title: "GAME",
    to: "game",
  },
  {
    title: "ABOUT",
    to: "about",
  },
  {
    title: "CONTACT",
    to: "contact",
  },
];

const MenuBlock = ({isActive, onClickLink}) => { 

    return (
        <div className={cn(s.menuContainer, {
              [s.active] : isActive === true, 
              [s.deactive] : isActive === false
        })}>
          <div className={s.overlay} />
          <div>
            <ul>
              {
                  MENU.map(({title, to}, index) => (
                    <li key={index}>
                      <Link to={to} onClick={onClickLink} >
                        {title}
                      </Link>
                    </li>
                  ))
              } 
            </ul>
          </div>
        </div>
    )
};

export default MenuBlock;


