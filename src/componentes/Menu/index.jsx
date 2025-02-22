import styles from './Menu.module.css'

import MenuLink from '../MenuLink';

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink texto="Início" to="/"/>
                <MenuLink texto="Sobre mim" to="/sobremim"/>
            </nav>
        </header>
    );
}