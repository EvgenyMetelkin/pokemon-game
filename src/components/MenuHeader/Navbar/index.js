import cn from 'classnames';

import s from  './style.module.css';

const NavbarBlock = ({isActive, onClickNavbar}) => {
    const handleClick = () => {
        onClickNavbar && onClickNavbar();
    }

    return (
        <nav id={s.navbar}>
          <div className={s.navWrapper}>
            <p className={s.brand}>
              LOGO
            </p>
            <a className={cn(s.menuButton, {[s.active] : isActive})} onClick={handleClick}>
              <span />
            </a>
          </div>
        </nav>
    )
};

export default NavbarBlock;



