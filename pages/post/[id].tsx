import {useRouter} from "next/router";
import {useState, useEffect} from 'react'

export default function Post(props) {
    const router = useRouter();
    const [post, setPost] = useState(props.children.post);
    console.log(props.children.post, 'props.children.post')
    useEffect(() => {
        async function load() {
            const response = await fetch('http://localhost:4200/posts');
            const data = await response.json();
            setPost(data)
        }

        if (!props.children.post) {
            load()
        }
    }, [])
    if (!post) {
        return <h1>loading...</h1>
    }
    return <>
        <h1>
            <span>{router.query.id}</span>
            Post
        </h1>
        <p>{post.text}</p>
    </>
}

export async function getServerSideProps(context,req) {
    const response = await fetch(`http://localhost:4200/posts/${context.query.id}`);
    const post = await response.json();
    if (!req) {
        return {props: {post: null}}
    }

    return {
        props: {post}
    }
}