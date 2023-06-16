import { Collection } from "pages_flat";
import { artworkService } from "services";
import { GetServerSideProps } from "next";

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