import {useState, useEffect} from 'react'
import Link from "next/link";
import {MyPost} from "../interfaces/post";

interface PostPageProps {
    posts: MyPost[],
}

export default function Posts(props) {
    const posts: MyPost[] = props.children.posts;
    return <>
        <h1><span>1123</span>Post</h1>
        <ul>{posts && posts.map((item) => (
            <li key={item.id}>
                <Link href={`/post/${item.id}`}>
                    <a>{item.title}</a>
                </Link>
            </li>
        ))} </ul>
    </>
}

export async function getServerSideProps() {
    const response = await fetch('http://localhost:4200/posts');
    const posts: MyPost[] = await response.json();

    return {
        props: {posts}
    }
}