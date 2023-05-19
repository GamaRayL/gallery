import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import Layout from "widgets/Layout/ui/Layout";
import "styles/global.scss";
import { useRouter } from "next/router";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const background = pathname == "/" ? "bgHome" : "bgOthers";

  return (
    <>
      <div className={montserrat.className}>
        <Head>
          <title>NextJS Gallery</title>
        </Head>
        <div className={background} style={{ width: "100%" }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </div >
    </>
  );
}

export default MyApp;