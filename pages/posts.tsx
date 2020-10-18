import { MainLayout } from "../components/MainLayout";
import { useState, useEffect } from "react";
import Link from "next/link";
import { MyPostData } from "../interfaces/post";
import { NextPageContext } from "next";

interface PostsPageProps {
  posts: MyPostData[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);

  useEffect(() => {
    async function load() {
      const resp = await fetch("http://localhost:4200/posts");
      const json = await resp.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout title='Loading posts ...'>
        <p>Loading ...</p>
      </MainLayout>
    );
  }

  return (
    <MainLayout title='Posts page'>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return {
      posts: null,
    };
  }

  const resp = await fetch("http://localhost:4200/posts");
  const posts: MyPostData[] = await resp.json();

  return { posts };
};
