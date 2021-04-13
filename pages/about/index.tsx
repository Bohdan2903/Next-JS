import Router from "next/router";
import Head from "next/head";
import MainLayout from "../../components/MainLayout";

export default function About() {
    const clickBtn = () => Router.push('/')
    return <MainLayout title={'about page'}>
        <h1>AboutMe</h1>
        <button onClick={clickBtn}>Back to home</button>
        <button onClick={() => Router.push('/posts')}>Back to home</button>
    </MainLayout>
}