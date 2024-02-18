"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/client";
import { signIn as signInByNextAuth } from "next-auth/react";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = async () => {
    if (!email) return;
    if (!password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      await signInByNextAuth("credentials", {
        idToken,
        callbackUrl: "/",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="メールアドレス"
        />
      </div>
      <div>
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="パスワード"
        />
      </div>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
        onClick={() => {
          signIn();
        }}
      >
        ログイン
      </button>
    </>
  );
};

export default SignIn;
