import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

export default function Index() {
  return (
    <MainLayout title={"Home Page"}>
      <h1>Hello Hext.JS!</h1>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href='/posts '>
          <a>Posts</a>
        </Link>
      </p>
      <p>
        <Link href='/undefined-page '>
          <a>404 page</a>
        </Link>
      </p>
    </MainLayout>
  );
}
