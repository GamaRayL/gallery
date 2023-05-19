import store from "app/store";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { Checkbox, Container, Grid } from "shared/ui";
import { Filter } from "widgets";
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

const Collection: FC = observer(() => {
  const { pathname } = useRouter();

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    const header = document.querySelector(".header") as HTMLElement;

    if (pathname == "/collection") {
      body.style.overflowX = "hidden";
      body.style.overflowY = "auto";

      header.style.position = "absolute";
    }
  }, [pathname]);

  return (
    <section className="collection">
      <Container>
        <h1 className="collection__title">Коллекция</h1>
        <Checkbox label="Тут должен быть текст" count="1444" />
      </Container>

      <section className="collection__filter">
        <Container>
          <Filter />
        </Container>
      </section>
      <Container>
        <p style={{ marginBottom: "60px" }}>Результат</p>
      </Container>

      <Container>
        <Grid columns={store.columns}>
          {array.map(i => (
            <div key={i} style={{ width: 244, height: 244, background: "black", border: "1px solid white" }}>Блок</div>
          ))}
        </Grid>
      </Container>
    </section>
  );
});

export default Collection;