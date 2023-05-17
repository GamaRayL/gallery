import { CSSProperties, FC } from "react";
import { IModal } from "shared/lib/types";

const Modal: FC<IModal> = (props) => {
  const { color, children } = props;

  return (
    <div
      className="modal"
      style={{ "--color": `${color || "#FFCE01"}` } as CSSProperties}
    >
      {children}
    </div >
  );
};

export default Modal;