import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdLightbulbOutline } from 'react-icons/md';
import { BsTrash } from 'react-icons/bs';
import { navCLass, navLinkClass } from './style.css';

export interface Props {
  closeNavbar: () => void;
}

export const Nav: React.FC<Props> = React.memo(({ closeNavbar }) => (
  <nav className={navCLass}>
    <ul>
      <li>
        <NavLink
          to="/home"
          onClick={closeNavbar}
          className={navLinkClass.base}
          activeClassName={navLinkClass.active}
        >
          <MdLightbulbOutline />
          Notes
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/trash"
          onClick={closeNavbar}
          className={navLinkClass.base}
          activeClassName={navLinkClass.active}
        >
          <BsTrash />
          Trash
        </NavLink>
      </li>
    </ul>
  </nav>
));
