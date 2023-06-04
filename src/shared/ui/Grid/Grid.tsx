import { CSSProperties, FC } from "react";
import classNames from "classnames";
import { IGrid } from "shared/lib/types";

const Grid: FC<IGrid> = (props) => {
  const { children, className, columns } = props;

  return (
    <div
      className={classNames(className, "grid")}
      style={{ "--columns": `${columns || 4}` } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Grid;