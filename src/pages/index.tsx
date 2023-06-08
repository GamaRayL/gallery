import { GetServerSideProps } from "next";
import { artworkService } from "services";
import { Home } from "pages_flat";
import { IArtworksData } from "types";

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