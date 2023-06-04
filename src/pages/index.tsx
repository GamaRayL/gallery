import { GetServerSideProps } from "next";
import { artworkService } from "services";
import { Home } from "pages_flat";

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