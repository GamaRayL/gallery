import { createContext, useEffect, useMemo } from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import ArtworkStore from "store/ArtworkStore";
import "styles/global.scss";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const MobxContext = createContext<ArtworkStore | null>(null);

function MyApp({ Component, pageProps }: AppProps) {
  const store = useMemo(() => new ArtworkStore(), []);

  useEffect(() => {
    if (Component.name === "CollectionPage" || Component.name === "HomePage") {
      store.hydrate(pageProps);
    }
  }, [Component.name, pageProps, store]);


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
