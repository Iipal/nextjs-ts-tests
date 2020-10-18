import Head from "next/head";
import Link from "next/link";

export function MainLayout({ children, title = "nextApp" }) {
  return (
    <>
      <Head>
        <title>{title} | NextJS</title>
        <meta name='keywords' content='next,javascript,nextjs,react' />
        <meta name='description' content='this is education project' />
      </Head>

      <nav>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          top: 0;
          right: 0;
          background: #f0d0e0;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          colro: black;
          text-decoration: none;
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
