import Router from "next/router";
import { MainLayout } from "../../components/MainLayout";

interface AboutProps {
  title: string;
}

export default function About({ title }: AboutProps) {
  return (
    <MainLayout title='About page'>
      <h1>{title}</h1>

      <button onClick={() => Router.push("/")}>Go back to home</button>
      <button onClick={() => Router.push("/posts")}>Go to posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async () => {
  const resp = await fetch("http://localhost:4200/about");
  const data = await resp.json();

  return { title: data.title };
};
