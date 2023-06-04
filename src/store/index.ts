import { enableStaticRendering } from "mobx-react-lite";
import ArtworkStore from "store/artworkStore";
import { IArtworksData } from "types";

// включить статический рендеринг только на сервере
enableStaticRendering(typeof window === "undefined");

let clientStore: ArtworkStore;

const initStore = (initData: IArtworksData) => {
  // проверка: если клиентский store уже есть, иначе создаём его
  const store = clientStore ?? new ArtworkStore();

  // если получили данные по запросу (из _app), то проводим гидрацию данных
  if (initData) store.hydrate(initData);

  // если серверный компонент, то возвращаем store
  if (typeof window === "undefined") return store;

  // если клиентского store нет, то присвоим ему store
  if (!clientStore) clientStore = store;

  return store;
};

export function useStore(initData: IArtworksData) {
  // передаём данные, для создания хранилища
  return initStore(initData);
}