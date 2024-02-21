'use client';
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession} from 'next-auth/react';


export default function Home() {
  const session = useSession();
  return (
    <div className="flex flex-col space-y-10 justify-center items-center mt-10 min-h">
      <div>
        <h1 className="text-3xl font-bold">Top Page</h1>
      </div>
      <div>{session?.data?.user?.name}</div>
      <div>
        <Link href="/">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            新規登録
          </button>
        </Link>
        <Link href="/signin">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
          >
            ログイン
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
            onClick={()=> signOut()}
          >
            ログアウト
          </button>
        </Link>
      </div>
    </div>
  );
}
