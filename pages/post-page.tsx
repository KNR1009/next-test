import Layout from "../components/Layout";
import Link from "next/link";
import { getAllPostsData } from "../lib/posts";
import React, { VFC } from "react";
// import { ParsedUrlQuery } from "querystring";
import { GetStaticProps } from "next";
import { Post } from "../components/Post";

type PostProps = {
  posts: {
    id: number;
    title: string;
    content: string;
    created_at: string;
  }[];
};

const PostPage: VFC<PostProps> = ({ posts }: PostProps) => {
  console.log(posts);
  return (
    <Layout title="投稿一覧">
      <ul>
        {posts && posts.map((post) => <Post key={post.id} post={post} />)}
      </ul>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPostsData();
  return {
    props: { posts },
  };
};

// export async function getStaticProps() {
//   const posts: PostProps = await getAllPostsData();
//   return {
//     props: { posts },
//     revalidate: 3,
//   };
// }

export default PostPage;
