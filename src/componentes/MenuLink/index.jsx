import { NavLink } from 'react-router-dom';

import styles from './MenuLink.module.css'

export default function MenuLink({ texto, to }) {
    return (
        <NavLink
            className={({isActive}) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}>{texto}</NavLink>
    );
}