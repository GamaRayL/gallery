import { Artwork } from "pages_flat";
import { artworkService } from "services";
import { ParsedUrlQuery } from "querystring";
import { IArtworkTistDataSingle } from "types";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";

const ArtworkPage: NextPage<IArtworkTistDataSingle> = ({ artwork, artist }) => {
  return <Artwork artwork={artwork} artist={artist} />;
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
  const artist = await artworkService.getArtistById(String(artwork.artist_id));
  
  return {
    props: {
      artwork,
      artist
    }
  };
};


export default ArtworkPage;