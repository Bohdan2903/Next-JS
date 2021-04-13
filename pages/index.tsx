import Link from 'next/link';
import MainLayout from "../components/MainLayout";

export default function Index() {
    return <MainLayout title={'home page'}>
        <h1>Hello Next</h1>
        <Link href={"/about"}><a>learn about</a></Link>
        <br/>
        <Link href={'/post/0'}><a>learn post</a></Link>

    </MainLayout>

}