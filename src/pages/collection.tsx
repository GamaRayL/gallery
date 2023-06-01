import { GetServerSideProps } from "next";
import { Collection } from "pages_flat";
import { collectionService } from "pages_flat/Collection/lib/services";

const CollectionPage = () => <Collection />;

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks = await collectionService.getAll();

  return {
    props: {
      artworks
    }
  };
};

export default CollectionPage;