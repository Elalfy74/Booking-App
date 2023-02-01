import "../styles/globals.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/free-mode";

import type { AppProps } from "next/app";

import { Layout } from "@/layouts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
