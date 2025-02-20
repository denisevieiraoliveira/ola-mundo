import { Link } from 'react-router-dom';
import styles from './PostCard.module.css'

export default function PostCard({ post, textoBotao, ler }){
    return(
        <Link to={`posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa} 
                    src={`src/assets/posts/${post.id}/capa.png`} 
                    alt="Imagem de capa do post" 
                />
                <h2 className={styles.titulo}>
                    {post.titulo}
                </h2>
                <button className={styles.botaoLer} onClick={ler}>
                    {textoBotao}
                </button>
            </div>
        </Link>
    );
}