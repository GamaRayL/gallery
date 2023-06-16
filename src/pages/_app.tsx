import "styles/global.scss";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import ArtworkStore from "store/ArtworkStore";
import NextNProgress from 'nextjs-progressbar';
import { createContext, useMemo } from "react";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const MobxContext = createContext<ArtworkStore | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => new ArtworkStore(), []);

  store.hydrate(pageProps);

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
