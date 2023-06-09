import { FC } from "react";
import classNames from "classnames";
import { IContainer } from "shared/lib/types";

const Container: FC<IContainer> = (props) => {
  const { children, className } = props;

  return (
    <div className={classNames(className, "container")}>
      {children}
    </div>
  );
};

export default Container;