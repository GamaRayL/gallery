import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import Layout from "widgets/Layout/ui/Layout";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Layout>
        <NextNProgress height={6} />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;