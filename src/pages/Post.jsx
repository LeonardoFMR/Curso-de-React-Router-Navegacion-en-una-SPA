import { useState, useEffect } from 'react';
import '../assets/css/componentes/card.css';
import { useParams, useNavigate } from 'react-router-dom';
import { buscar } from '../api/api'

const Post = ({ url }) => {

    const [post, setPost] = useState({});
   
    const { id } = useParams();

    const navigate = useNavigate()

    useEffect (() => {
        buscar(`/posts/${id}`,setPost).catch(() => {
            navigate("/PendingPost")

        })
    },[id])

    return (
        <main className="container flex flex--center">
            <article className="card post">
                <h2 className="notfound-text">{post.title}</h2>
                <p className="text__card">{post.body}</p>
            </article>
        </main>
    );
}

export default Post;
