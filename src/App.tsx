import { useRef } from "react";
import { type FormHandle, Form, Input, Button } from "./components";

function App() {
  // const inputRef = useRef<HTMLInputElement>(null);
  const customFormRef = useRef<FormHandle>(null);

  const handleSave = (data: unknown) => {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormRef.current?.clear();
  };
  return (
    <main>
      <Form onSave={handleSave} ref={customFormRef}>
        <Input id="name" label="Name" type="text" />
        <Input id="age" label="Age" type="number" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
