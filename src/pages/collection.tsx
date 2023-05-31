import { GetServerSideProps } from "next";
import { Collection } from "pages_flat";
import { CollectionService } from "pages_flat/Collection/lib/services/CollectionService";

const CollectionPage = () => <Collection />;

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks = await CollectionService.getAll();
  return {
    props: {
      artworks
    }
  };
};

export default CollectionPage;