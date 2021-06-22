import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout title={"トップページ"}>
      <Link href="/post-page">
        <a>投稿一覧へ</a>
      </Link>
    </Layout>
  );
}
