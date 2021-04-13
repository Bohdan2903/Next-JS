import Link from "next/link";
import Head from "next/head";

export default function MainLayout({children, title}) {
    return <>
        <Head>
            <title>{title}</title>
        </Head>
        <nav>
            <h1>Navigation</h1>
            <Link href={"/about"}><a>learn about</a></Link>
            <Link href={"/posts"}><a>learn posts</a></Link>
            <Link href={"/"}><a>learn main</a></Link>
        </nav>
        <main>{children}</main>
        <style jsx>{`nav {
          display: flex;
          width: 100%;
          left: 0;
          justify-content: space-between;
          position: fixed;
          top: 0;
          background: lightgray;
        }

        nav a {
          color: red;
        }
        `}</style>
    </>
}