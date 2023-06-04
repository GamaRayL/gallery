import { GetServerSideProps } from "next";
import { artworkService } from "services";
import { Collection } from "pages_flat";

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