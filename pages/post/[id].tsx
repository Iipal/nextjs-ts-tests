import Link from "next/link";
import { MainLayout } from "../../components/MainLayout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import { MyPostData } from "../../interfaces/post";

interface PostPageProps {
  post: MyPostData;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const resp = await fetch(`http://localhost:4200/posts/${router.query.id}`);
      const data = await resp.json();
      setPost(data);
    }
    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout title='Loading post'>
        <p>Loading...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={`Post: ${post.title}`}>
      <h1>Post: {post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={"/posts"}>
        <a>Back to posts</a>
      </Link>
    </MainLayout>
  );
}

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

Post.getInitialProps = async ({ query, req }: PostNextPageContext) => {
  if (!req) {
    return { post: null };
  }

  const resp = await fetch(`http://localhost:4200/posts/${query.id}`);
  const post: MyPostData = await resp.json();

  return { post };
};
