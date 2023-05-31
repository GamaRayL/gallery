import { createContext } from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import { useStore } from "store";
import ArtworkStore from "store/ArtworkStore";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const MobxContext = createContext<ArtworkStore | undefined>(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps);
  console.log(pageProps);
  return (
    <MobxContext.Provider value={store}>
      <div className={montserrat.className}>
        <NextNProgress height={6} />
        <Component {...pageProps} />
      </div>
    </MobxContext.Provider>
  );
}

export default MyApp;