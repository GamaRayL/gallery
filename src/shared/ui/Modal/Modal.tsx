import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import { IModal } from "shared/lib/types";

const Modal: FC<IModal> = (props) => {
  const { children } = props;
  const { pathname } = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && pathname !== "/") {
      ref.current.style.background = "#DDDDDD";
    }
  }, [pathname]);

  return (
    <div
      className="modal"
      ref={ref}
    >
      {children}
    </div >
  );
};

export default Modal;