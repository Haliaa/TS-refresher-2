import { forwardRef, type ReactNode, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

type Props = {
  children: ReactNode;
  onClose: () => void;
};

export type ModalHandle = {
  open: () => void;
};

export const Modal = forwardRef<ModalHandle, Props>((props, ref) => {
  const { children, onClose } = props;
  const dialogRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => ({
    open: () => {
      if (dialogRef.current) {
        dialogRef.current.showModal();
      }
    },
  }));

  return createPortal(
    <dialog ref={dialogRef} className="modal" onClose={onClose}>
      {children}
    </dialog>,
    document.getElementById("modal-root")!
  );
});
