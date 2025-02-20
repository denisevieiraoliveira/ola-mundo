import { useParams } from "react-router-dom";
import posts from '@/json/posts.json';
import PostModelo from "@/componentes/PostModelo";
import fotoCapa from "@/assets/sobre_mim_capa.png";

export default function Post() {

    const id = parseInt(useParams().id);

    return (
        <>
            {posts
                .filter(post => post.id === id)
                .map((post, key) => {
                    return (
                        <PostModelo key={key} fotoCapa={fotoCapa} titulo={post.titulo}>
                            <h1>{post.texto}</h1>
                        </PostModelo>
                    )
                })
            }
        </>
    );
}