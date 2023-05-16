import { useRouter } from "next/router";
import { useEffect } from "react";

const Home = () => {
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") {
      const home = document.querySelector(".home") as HTMLDivElement;
      const body = document.querySelector("body") as HTMLBodyElement;

      home.style.overflowX = "scroll";
      body.style.overflowY = "hidden";

      home.addEventListener("wheel", (event) => {
        if (home) {
          if (event.deltaY > 0) {
            home.scrollBy(40, 0);
          }
          if (event.deltaY < 0) {

            home.scrollBy(-40, 0);
          }
        }
      });
    }
  }, [pathname]);

  return (
    <div className="home" style={{ display: "flex", height: "97.5vh" }}>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
      <div style={{ width: 400, margin: 100 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis harum, rerum dolor cum soluta quis quidem, itaque magni ullam accusantium iusto, nostrum cupiditate perferendis illum. Non vel nam quam nihil.
      </div>
    </div>
  );
};

export default Home;