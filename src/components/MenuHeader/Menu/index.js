import cn from 'classnames';

import {useHistory} from 'react-router-dom';

import s from  './style.module.css';

const MENU = [
  {
    title: "HOME",
    to: "/home",
  },
  {
    title: "GAME",
    to: "/game",
  },
  {
    title: "ABOUT",
    to: "/about",
  },
  {
    title: "CONTACT",
    to: "/contact",
  },
];

const MenuBlock = ({isActive, onClickLink}) => { 
    const history = useHistory();

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
                    <li className={s.link} key={index} onClick={() => {
                      onClickLink(); 
                      history.push(to)}} 
                    >
                        {title} 
                    </li>
                  ))
              } 
            </ul>
          </div>
        </div>
    )
};

export default MenuBlock;


