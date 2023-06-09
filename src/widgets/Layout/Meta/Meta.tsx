import Head from "next/head";
import { FC } from "react";
import { IMeta } from "widgets/Layout/lib/types";
import { getTitle } from "widgets/Layout/lib/utils";

const Meta: FC<IMeta> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <title>{getTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        {description ?
          <>
            <meta name="description" content={description} />
            <meta name="og:title" content={getTitle(title)} />
            <meta name="og:description" content={description} />
          </>
          : <meta name="robots" content="noindex, nofollow" />
        }
      </Head>
      {children}
    </>
  );
};

export default Meta;