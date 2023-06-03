import { GetServerSideProps } from "next";
import { Collection } from "pages_flat";
import { artworkService } from "pages_flat/Collection/lib/services";

const CollectionPage = () => <Collection />;

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks = await artworkService.getAll();

  return {
    props: {
      artworks
    }
  };
};

export default CollectionPage;