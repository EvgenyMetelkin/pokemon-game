import cn from 'classnames';

import s from  './style.module.css';

const NavbarBlock = ({isActive, bgActive = false, onClickNavbar}) => {
    // const handleClick = () => {
    //     onClickNavbar && onClickNavbar();
    // };

    return (
        <nav id={s.navbar} className={cn({
          [s.bgActive] : bgActive
        })}>
          <div className={s.navWrapper}>
            <p className={s.brand}>
              LOGO
            </p>
            <div className={cn(s.menuButton, {
              [s.active] : isActive === true
              })} 
              onClick={onClickNavbar}
            >
              <span />
            </div>
          </div>
        </nav>
    )
};

export default NavbarBlock;



