import Link from "next/link";

type PostProps = {
  post: {
    id: number;
    title: string;
    content: string;
    created_at: string;
  };
};

export const Post = ({ post }: PostProps) => {
  return (
    <div>
      <span>{post.id}</span>
      {" : "}

      <span className="cursor-pointer text-white border-b border-gray-500 hover:bg-gray-600">
        {post.title}
      </span>
    </div>
  );
};

export default Post;
