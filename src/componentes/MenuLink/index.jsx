import { Link, useLocation } from 'react-router-dom';
import styles from './MenuLink.module.css'

export default function MenuLink({ texto, to }) {

    const localizacao = useLocation();

    return (
        <Link 
            className={`
                ${styles.link}
                ${localizacao.pathname === to ? styles.linkDestacado : ''}
            `} 
            to={to}
        >{texto}</Link>
    );
}