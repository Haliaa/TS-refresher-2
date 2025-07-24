import { Session, useSessionsContext } from "../store/session.context";
import { Modal, type ModalHandle } from "./UI/Modal";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import { FormEvent, useRef } from "react";

type Props = {
  session: Session;
  closeModal: () => void;
};

export const BookSession = ({ session, closeModal }: Props) => {
  const modalRef = useRef<ModalHandle>(null);
  const sessionsCtx = useSessionsContext();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("(not) sending user data to server", data);

    sessionsCtx.bookSession(session);
    closeModal();
  };

  return (
    <Modal onClose={closeModal} ref={modalRef}>
      <h2>Book Session</h2>
      <form onSubmit={handleSubmit}>
        <Input label="Your name" id="name" name="name" type="text" />
        <Input label="Your email" id="email" name="email" type="email" />
        <p className="actions">
          <Button type="button" textOnly onClick={closeModal}>
            Cancel
          </Button>
          <Button>Book Session</Button>
        </p>
      </form>
    </Modal>
  );
};
