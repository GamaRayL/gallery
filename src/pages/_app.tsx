import { createContext } from "react";
import { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NextNProgress from 'nextjs-progressbar';
import ArtworkStore, { IArtworkStore } from "store/artworkStore";
import "styles/global.scss";
import { useStore } from "store";

const montserrat = Montserrat({
  subsets: ["cyrillic"],
});

export const MobxContext = createContext<ArtworkStore | undefined>(undefined);

function MyApp({ Component, pageProps }: AppProps) {
  const store: IArtworkStore = useStore(pageProps);

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