import { GetServerSideProps } from "next";
import { Home } from "pages_flat";
import { artworkService } from "pages_flat/Collection/lib/services";

const HomePage = () => <Home />;

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks = await artworkService.getAll();

  return {
    props: {
      artworks
    }
  };
};

export default HomePage;