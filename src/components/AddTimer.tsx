import { useRef } from "react";
import { Button, Input, Form, FormHandle } from "../components";
import { useTimersContext } from "../store";

export const AddTimer = () => {
  const form = useRef<FormHandle>(null);
  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    console.log(extractedData);
    addTimer({
      name: extractedData.name,
      duration: +extractedData.duration, // convert string to number
    });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="number" label="Duration" id="duration" />
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
};
