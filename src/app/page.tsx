import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1>Top Page</h1>
        <Link href='/'>新規登録</Link>
        <Link href='/'>ログイン</Link>
      </div>
  );
}
