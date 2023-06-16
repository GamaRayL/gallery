import { Home } from "pages_flat";
import { IArtworksData } from "types";
import { artworkService } from "services";
import { GetServerSideProps } from "next";

const HomePage = ({ artworks }: IArtworksData) => <Home artworks={artworks} />;

export const getServerSideProps: GetServerSideProps = async () => {
  const artworks = (await artworkService.getAll()).slice(148, 152);

  return {
    props: {
      artworks
    }
  };
};

export default HomePage;