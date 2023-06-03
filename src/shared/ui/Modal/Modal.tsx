import { FC } from "react";
import { IModal } from "shared/lib/types";

const Modal: FC<IModal> = (props) => {
  const { children } = props;
  return (
    <div
      className="modal"
    >
      {children}
    </div >
  );
};

export default Modal;