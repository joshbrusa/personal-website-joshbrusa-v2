import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>joshbrusa.com</title>
      </Head>
      <h1 className="text-2xl">joshbrusa.com</h1>
      <ul className="mt-2 list-disc list-inside">
        <li>
          <Link
            href="https://docs.google.com/document/d/e/2PACX-1vQCphb70B-DQmPSOR_GVsz3uV4iTevAKDDh-K5tVKStVlsqoWUG2f5ekOOW_DuHZDBT0Dq-WNPtulEM/pub"
            target="_blank"
          >
            Resume
          </Link>
        </li>
        <li>
          <Link href="https://linkedin.com/in/joshbrusa" target="_blank">
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://github.com/joshbrusa" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
      <h2 className="mt-2 text-xl">Projects</h2>
      <ul className="mt-2 list-disc list-inside">
        <li>
          <Link href="https://joshpractice.vercel.app/" target="_blank">
            Quiz Application
          </Link>
        </li>
        <li>
          <Link href="https://joshbrusa-stonks.vercel.app/" target="_blank">
            Stock Visualization Application
          </Link>
        </li>
        <li>
          <Link href="https://github.com/joshbrusa/todo-app" target="_blank">
            Full Stack Todo Application
          </Link>
        </li>
      </ul>
    </>
  );
}
