import { FC } from "react";
import { IContainer } from "shared/lib/types";

const Container: FC<IContainer> = (props) => {
  const { children } = props;

  return (
    <div className="container">
      {children}
    </div>
  );
};

export default Container;