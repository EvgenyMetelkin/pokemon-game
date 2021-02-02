import { useState } from 'react';

import MenuBlock from './Menu';
import NavbarBlock from './Navbar';

import s from  './style.module.css';

const MenuHeaderBlock = () => {
    const [isActive, setActive] = useState(false)

    const handleClickButton = () => {
        setActive(!isActive);
    }

    return (
        <>
            <MenuBlock isActive = {isActive}/>
            <NavbarBlock isActive = {isActive} onClickNavbar = {handleClickButton}/>
        </> 
    )
};

export default MenuHeaderBlock;