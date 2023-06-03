import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Artwork } from "pages_flat";
import { artworkService } from "pages_flat/Collection/lib/services";
import { IArtworkDataSingle } from "pages_flat/Collection/lib/types";
import { ParsedUrlQuery } from "querystring";

const ArtworkPage: NextPage<IArtworkDataSingle> = ({ artwork }) => {
  return <Artwork artwork={artwork} />;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const artworks = await artworkService.getAll();

  return {
    paths: artworks.map(artwork => ({
      params: {
        id: artwork.id.toString()
      }
    })),
    fallback: "blocking"
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const artwork = await artworkService.getById(String(params?.id));

  return {
    props: {
      artwork
    }
  };
};


export default ArtworkPage;