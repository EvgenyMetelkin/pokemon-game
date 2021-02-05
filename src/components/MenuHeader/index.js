import { useState } from 'react';

import MenuBlock from './Menu';
import NavbarBlock from './Navbar';
 
const MenuHeaderBlock = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);

    const handleClickButton = () => {
        setActive(prevState => !prevState);
    };

    return (
        <>
            <MenuBlock isActive = {isActive} onClickLink = {handleClickButton} />
            <NavbarBlock isActive = {isActive} bgActive={bgActive} onClickNavbar = {handleClickButton} />
        </> 
    );
};

export default MenuHeaderBlock;