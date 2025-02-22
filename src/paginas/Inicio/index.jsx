import styles from './Inicio.module.css'

import PostCard from '@/componentes/PostCard';

export default function Inicio({ posts }) {

    return (
        <ul className={styles.posts}>
            {posts.map((post) => (
                <li key={post.id}>
                    <PostCard post={post} />
                </li>
            ))}
        </ul>
    );
}