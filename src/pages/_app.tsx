import { createContext, useEffect, useMemo } from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import ArtworkStore from "store/artworkStore";
import { useStore } from "store";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const MobxContext = createContext<ArtworkStore | undefined>(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => new ArtworkStore(), []);

  useEffect(() => {
    store.hydrate(pageProps);
  }, [pageProps, store]);

  return (
    <MobxContext.Provider value={store}>
      <div className={montserrat.className}>
        <NextNProgress height={6} color="black" />
        <Component {...pageProps} />
      </div>
    </MobxContext.Provider>
  );
}

export default MyApp;
