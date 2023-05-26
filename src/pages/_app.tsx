import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <NextNProgress height={6} />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;