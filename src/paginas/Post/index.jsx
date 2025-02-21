import './Post.css';
import styles from './Post.module.css';
import { useNavigate, useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import posts from '@/json/posts.json';
import PostModelo from "@/componentes/PostModelo";
import PostCard from "@/componentes/PostCard";
import NaoEncontrada from '../NaoEncontrada';
import PaginaPadrao from '../../componentes/PaginaPadrao';

export default function Post() {

    const id = parseInt(useParams().id);

    const post = posts.find(post => post.id === id);

    const navegar = useNavigate();

    if (!post) {
        return (
            <div className="post-not-found">
                <NaoEncontrada />
            </div>
        );
    }

    const postsRecomendados = posts.filter((post) => post.id !== id)
        .sort((a, b) => b.id - a.id)
        .slice(0, 4);

    return (
        <PaginaPadrao>
            <PostModelo
                fotoCapa={`/src/assets/posts/${post.id}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>
               
                <h2 className={styles.tituloOutrosPosts}>Outros posts que você pode gostar:</h2>
                <ul className={styles.postsRecomendados}>
                    {postsRecomendados.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </PostModelo>
        </PaginaPadrao>
    );
}