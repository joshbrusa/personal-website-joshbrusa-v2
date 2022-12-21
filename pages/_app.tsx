import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="p-2 flex justify-center">
      <div className="flex flex-col w-full max-w-6xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
