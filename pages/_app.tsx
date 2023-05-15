import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Layout from "widgets/Layout/ui";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Gallery</title>
      </Head>
      <Layout>
        <div className={montserrat.className}>
          <Component {...pageProps} />
        </div>
      </Layout>
    </>
  );
}

export default MyApp;