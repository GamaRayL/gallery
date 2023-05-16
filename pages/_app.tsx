import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Layout from "widgets/Layout/ui/Layout";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className={montserrat.className}>
        <Head>
          <title>NextJS Gallery</title>
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </>
  );
}

export default MyApp;